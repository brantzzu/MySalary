import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SalaryHistoryPage } from './salary-history';

@NgModule({
  imports: [IonicModule],
  declarations: [SalaryHistoryPage,],
  entryComponents: [SalaryHistoryPage],
  providers: [],
  exports: [IonicModule]
})
export class SalaryHistoryModule {
}
