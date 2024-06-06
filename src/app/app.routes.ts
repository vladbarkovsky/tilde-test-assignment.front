import { Routes } from '@angular/router';
import { BalanceStatusesComponent } from './balance-statuses/balance-statuses.component';
import { AverageDebtsComponent } from './average-debts/average-debts.component';
import { BiggestDebtorCreditorComponent } from './biggest-debtor-creditor/biggest-debtor-creditor.component';
import { BestDebtorComponent } from './best-debtor/best-debtor.component';

export const routes: Routes = [
  { path: 'balance-statuses', component: BalanceStatusesComponent },
  { path: 'biggest-debtor-creditor', component: BiggestDebtorCreditorComponent },
  { path: 'average-debts', component: AverageDebtsComponent },
  { path: 'best-debtor', component: BestDebtorComponent },
  { path: '', redirectTo: 'balance-statuses', pathMatch: 'full' },
  { path: '**', redirectTo: 'balance-statuses' },
];
