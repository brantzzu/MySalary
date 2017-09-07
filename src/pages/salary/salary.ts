import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserInfo, LoginInfo } from '../../model/UserInfo';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';
import { SalaryHistoryPage } from '../salary-history/salary-history';
import { PerformanceDetailPage } from "./performanceDetail/performanceDetail";
import { PerformanceOriginPage } from './performanceOrigin/performanceOrigin';
import Chart from 'chart.js';

@Component({
  selector: 'page-salary',
  templateUrl: 'salary.html'
})
export class SalaryPage {
  @ViewChild('chartPie') chartPie: ElementRef;
  userInfo: UserInfo;
  salaryInfo: any;
  noSalaryInfo: boolean = false;
  currentYear: String;
  currentMonth: String;

  constructor(public navCtrl: NavController, private httpService: HttpService,
    private modalCtrl: ModalController, private nativeService: NativeService, private storage: Storage) {

  }

  ionViewDidEnter() {

  }

  ngAfterContentInit() {
    console.log("user:");
    this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
      this.userInfo = loginInfo && loginInfo.user ? loginInfo.user : null;
      //console.log(this.userInfo);
      if (this.userInfo.employeeCode) {
        this.httpService.get("http://quants.sufe.edu.cn/salaryInfo", { employeeCode: this.userInfo.employeeCode }).map(res => {
          return res.json();
        }).subscribe((json: any) => {
          this.salaryInfo = json;
          // console.log("basicSalary");
          // console.log(json[0]['basicSalary']);
          this.currentYear = json[0]['salaryYear'];
          this.currentMonth = json[0]['salaryMonth'];
          Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
            data: {
              labels: [
                "基本工资",
                "岗位津贴",
                "绩效提成",
                "提点津贴",
                "其他发放",
                "加班费"
              ],
              datasets: [
                {
                  data: [json[0]['basicSalary'], json[0]['postAllowance'], 0, json[0]['commissionAllowance'], json[0]['otherAllowence'], json[0]['overTimeFee']],
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#73C6B6",
                    "#239B56",
                    "#7D3C98"
                  ],
                  hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#73C6B6",
                    "#239B56",
                    "#7D3C98"
                  ]
                }]
            }
          });
          //console.log(this.salaryInfo);
          if (json.length < 1) {
            this.noSalaryInfo = true;
          }
        });
      } else {
        this.nativeService.showToast('获取用户信息失败，请重新登录！');
      }
    });
  }

  /**
   * 查看历史月份工资信息
   */
  gotoSalaryHistory() {
    this.navCtrl.push(SalaryHistoryPage, { 'userInfo': this.userInfo });
  }
  /**
   * 查看考勤扣减
   */
  performanceDeductionDetail() {
    // console.log("currentYear:");
    // console.log(this.currentYear);
    // console.log("currentMonth:");
    // console.log(this.currentMonth);
    let modal = this.modalCtrl.create(PerformanceDetailPage, {
      'userInfo': this.userInfo,
      'salaryYear': this.currentYear,
      'salaryMonth': this.currentMonth
    });
    modal.present();

  }
  /**
   * 查看业绩来源详细
   */
  performanceOrigin() {
    let modal = this.modalCtrl.create(PerformanceOriginPage, {
      'userInfo': this.userInfo,
      'salaryYear': this.currentYear,
      'salaryMonth': this.currentMonth
    });
    modal.present();

  }


}

