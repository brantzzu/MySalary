import { Component, } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserInfo, LoginInfo } from '../../model/UserInfo';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';

@Component({
  selector: 'page-salary-history',
  templateUrl: 'salary-history.html'
})
export class SalaryHistoryPage {
  house_id: string;
  salaryInfo: any;
  noSalaryInfo: boolean = false;
  zone: any;
  modeKeys: any;
  startDate: any;
  endDate: any;
  selectedRow: Number;
  setClickedRow: Function;

  constructor(public navCtrl: NavController, private httpService: HttpService,
    private params: NavParams,
    private nativeService: NativeService, private storage: Storage) {
    this.house_id = params.get('house_id');
    this.startDate = new Date().toISOString();
    this.endDate = new Date().toISOString();
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  ionViewDidLoad() {
  }

  ngAfterContentInit() {
    // if (this.userInfo.employeeCode) {
    //   this.httpService.get("http://quants.sufe.edu.cn/salaryInfoHistory", { employeeCode: this.userInfo.employeeCode, startMonth: this.startDate.split('T')[0].replace('-', '').substring(0, 6), endMonth: this.endDate.split('T')[0].replace('-', '').substring(0, 6) }).map(res => {
    //     return res.json();
    //   }).subscribe((json: any) => {
    //     this.salaryInfo = json;
    //     if (json.length < 1) {
    //       this.noSalaryInfo = true;
    //     } else {
    //       this.noSalaryInfo = false;
    //     }
    //   });
    // } else {
    //   this.nativeService.showToast('获取用户信息失败，请重新登录！');
    // }
  }
  /**
   * 历史月份工资查询
   */
  search() {

    // if (this.userInfo.phone) {
    //   this.httpService.get("http://quants.sufe.edu.cn/salaryInfoHistory", { employeeCode: this.userInfo.phone, startMonth: this.startDate.split('T')[0].replace('-', '').substring(0, 6), endMonth: this.endDate.split('T')[0].replace('-', '').substring(0, 6) }).map(res => {
    //     return res.json();
    //   }).subscribe((json: any) => {
    //     this.salaryInfo = json;
    //     if (json.length < 1) {
    //       this.noSalaryInfo = true;
    //     } else {
    //       this.noSalaryInfo = false;
    //     }
    //   });
    // } else {
    //   this.nativeService.showToast('获取用户信息失败，请重新登录！');
    // }

  }
}

