import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { BiggestDebtorCreditorVM, StatisticsClient } from '../../../api-client';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-biggest-debtor-creditor',
  templateUrl: './biggest-debtor-creditor.component.html',
  styleUrl: './biggest-debtor-creditor.component.scss',
  standalone: true,
  imports: [CurrencyPipe],
})
export class BiggestDebtorCreditorComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly statisticsClient = inject(StatisticsClient);

  biggestDebtorCreditor: BiggestDebtorCreditorVM | undefined;

  ngOnInit(): void {
    this.statisticsClient
      .getBiggestDebtorCreditor()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: biggestDebtorCreditor => (this.biggestDebtorCreditor = biggestDebtorCreditor),
        // TODO: Add error displaying.
        error: error => {},
      });
  }
}
