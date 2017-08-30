import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AttendancePage } from './attendance';


@NgModule({
  imports: [IonicModule],
  declarations: [AttendancePage],
  entryComponents: [AttendancePage],
  providers: [],
  exports: [IonicModule]
})
export class AttendanceModule {
}
