import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SalaryPage } from './salary';

@NgModule({
  imports: [IonicModule],
  declarations: [SalaryPage,],
  entryComponents: [SalaryPage],
  providers: [],
  exports: [IonicModule]
})
export class SalaryModule {
}
