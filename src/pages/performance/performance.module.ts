import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PerformancePage } from './performance';

@NgModule({
  imports: [IonicModule],
  declarations: [PerformancePage],
  entryComponents: [PerformancePage],
  providers: [],
  exports: [IonicModule]
})
export class PerformanceModule {
}
