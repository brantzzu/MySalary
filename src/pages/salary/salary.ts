import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserInfo, LoginInfo } from '../../model/UserInfo';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';

@Component({
  selector: 'page-salary',
  templateUrl: 'salary.html'
})
export class SalaryPage {
  house_id: string;
  segmentsArray = ['segmentOne', 'segmentTwo', 'segmentThree'];
  segmentModel: string = this.segmentsArray[0];
  constructor(public navCtrl: NavController, private httpService: HttpService, private params: NavParams,
    private modalCtrl: ModalController, private nativeService: NativeService, private storage: Storage) {
    this.house_id = params.get('house_id');
  }

  ionViewDidEnter() {

  }

  swipeEvent(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.segmentsArray.indexOf(this.segmentModel) < 2) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.segmentsArray.indexOf(this.segmentModel) > 0) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) - 1];
      }
    }
  }

  /**
   * 查看历史月份工资信息
   */
  gotoSalaryHistory() {
    //this.navCtrl.push(SalaryHistoryPage, { 'userInfo': this.userInfo });
  }
  /**
   * 查看考勤扣减
   */
  performanceDeductionDetail() {
    // console.log("currentYear:");
    // console.log(this.currentYear);
    // console.log("currentMonth:");

  }

}

