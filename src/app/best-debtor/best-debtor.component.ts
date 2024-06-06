import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { BestDebtorVM, StatisticsClient } from '../../../api-client';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-best-debtor',
  templateUrl: './best-debtor.component.html',
  styleUrl: './best-debtor.component.scss',
  standalone: true,
  imports: [PercentPipe, CurrencyPipe],
})
export class BestDebtorComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly statisticsClient = inject(StatisticsClient);

  bestDebtor: BestDebtorVM | undefined;

  ngOnInit(): void {
    this.statisticsClient
      .getBestDebtor()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: bestDebtor => (this.bestDebtor = bestDebtor),
        // TODO: Add error displaying.
        error: error => {},
      });
  }
}
