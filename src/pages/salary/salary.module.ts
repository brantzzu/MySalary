import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SalaryPage } from './salary';
import { PerformanceDetailPage } from './performanceDetail/performanceDetail';
import { PerformanceOriginPage } from './performanceOrigin/performanceOrigin';

@NgModule({
  imports: [IonicModule],
  declarations: [SalaryPage, PerformanceDetailPage, PerformanceOriginPage],
  entryComponents: [SalaryPage, PerformanceDetailPage, PerformanceOriginPage],
  providers: [],
  exports: [IonicModule]
})
export class SalaryModule {
}
