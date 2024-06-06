import { Component, DestroyRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import {
  AverageDebtVM,
  GetAverageDebtsQuery,
  GetBalanceStatusesQuery,
  SortDirection,
  StatisticsClient,
} from '../../../api-client';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { SortEvent, SortDirective } from '../common/sort.directive';
import { Subject, debounceTime, finalize } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-average-debts',
  templateUrl: './average-debts.component.html',
  styleUrl: './average-debts.component.scss',
  standalone: true,
  imports: [FormsModule, NgbHighlight, SortDirective, CurrencyPipe],
})
export class AverageDebtsComponent implements OnInit {
  @ViewChildren(SortDirective) sortableDirectives!: QueryList<SortDirective>;

  private readonly destroyRef = inject(DestroyRef);
  private readonly statisticsClient = inject(StatisticsClient);

  loading = false;

  query: GetAverageDebtsQuery = new GetBalanceStatusesQuery({
    sortBy: '',
    sortDirection: SortDirection.Ascending,
    searchText: '',
  });

  averageDebts: AverageDebtVM[] = [];

  private readonly search$ = new Subject<void>();

  ngOnInit(): void {
    this.getAverageDebts();
    this.search$.pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.getAverageDebts());
  }

  onSearchTextChange(): void {
    this.search$.next();
  }

  onSort($event: SortEvent): void {
    this.query.sortBy = $event.sortBy;
    this.query.sortDirection = $event.direction;
    this.loading = true;

    this.statisticsClient
      .getAverageDebts(this.query)
      .pipe(
        finalize(() => (this.loading = false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: averageDebts => {
          this.averageDebts = averageDebts;

          for (let directive of this.sortableDirectives) {
            if (directive.sortBy !== this.query.sortBy && directive.direction) {
              directive.direction = SortDirection.Ascending;
            }
          }
        },
        // TODO: Add error displaying.
        error: error => {},
      });
  }

  private getAverageDebts(): void {
    this.loading = true;

    this.statisticsClient
      .getAverageDebts(this.query)
      .pipe(
        finalize(() => (this.loading = false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: averageDebts => (this.averageDebts = averageDebts),
        // TODO: Add error displaying.
        error: error => {},
      });
  }
}
