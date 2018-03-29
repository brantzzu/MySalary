import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomePage } from './home';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  imports: [IonicModule, MultiPickerModule],
  declarations: [HomePage],
  entryComponents: [HomePage],
  providers: [],
  exports: [IonicModule]
})
export class HomeModule {
}
