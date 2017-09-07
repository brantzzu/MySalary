import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalaryPage } from '../salary/salary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToSalary() {
    this.navCtrl.push(SalaryPage);
    //this.tab.select(1);
  }

}
