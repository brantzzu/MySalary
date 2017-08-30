import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ContractPage } from './contract';

@NgModule({
  imports: [IonicModule],
  declarations: [ContractPage],
  entryComponents: [ContractPage],
  providers: [],
  exports: [IonicModule]
})
export class ContractModule {
}
