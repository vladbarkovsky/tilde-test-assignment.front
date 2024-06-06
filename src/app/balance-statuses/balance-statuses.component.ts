import { Component, DestroyRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { BalanceStatusVM, GetBalanceStatusesQuery, SortDirection, StatisticsClient } from '../../../api-client';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { SortEvent, SortDirective } from '../common/sort.directive';
import { Subject, debounceTime, finalize } from 'rxjs';
import { BalanceStatusDirective } from './balance-status.directive';

@Component({
  selector: 'app-balance-statuses',
  templateUrl: './balance-statuses.component.html',
  styleUrl: './balance-statuses.component.scss',
  standalone: true,
  imports: [FormsModule, NgbHighlight, SortDirective, BalanceStatusDirective],
})
export class BalanceStatusesComponent implements OnInit {
  @ViewChildren(SortDirective) sortableDirectives!: QueryList<SortDirective>;

  private readonly destroyRef = inject(DestroyRef);
  private readonly statisticsClient = inject(StatisticsClient);

  loading = false;

  query: GetBalanceStatusesQuery = new GetBalanceStatusesQuery({
    sortBy: '',
    sortDirection: SortDirection.Ascending,
    searchText: '',
  });

  balanceStatuses: BalanceStatusVM[] = [];

  private readonly search$ = new Subject<void>();

  ngOnInit(): void {
    this.getBalanceStatuses();
    this.search$.pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.getBalanceStatuses());
  }

  onSearchTextChange(): void {
    this.search$.next();
  }

  onSort($event: SortEvent): void {
    this.query.sortBy = $event.sortBy;
    this.query.sortDirection = $event.direction;
    this.loading = true;

    this.statisticsClient
      .getBalanceStatuses(this.query)
      .pipe(
        finalize(() => (this.loading = false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: balanceStatuses => {
          this.balanceStatuses = balanceStatuses;

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

  private getBalanceStatuses(): void {
    this.loading = true;

    this.statisticsClient
      .getBalanceStatuses(this.query)
      .pipe(
        finalize(() => (this.loading = false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: balanceStatuses => (this.balanceStatuses = balanceStatuses),
        // TODO: Add error displaying.
        error: error => {},
      });
  }
}
