import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { Tabs, Events } from "ionic-angular";
import { SalaryPage } from "../salary/salary";
import { PerformancePage } from "../performance/performance";
import { AttendancePage } from "../attendance/attendance";
import { ContractPage } from "../contract/contract";
import { GlobalData } from "../../providers/GlobalData";
import { Helper } from "../../providers/Helper";
import { LoginInfo } from "../../model/UserInfo";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  homeRoot: any = HomePage;
  salaryRoot: any = SalaryPage;
  performanceRoot: any = PerformancePage;
  attendanceRoot: any = AttendancePage;
  contractRoot: any = ContractPage;
  mineRoot: any = MinePage;

  constructor(public events: Events, private globalData: GlobalData, private storage: Storage, private helper: Helper) {

  }

  ionViewWillEnter() {
    this.events.subscribe('user:login', (loginInfo: LoginInfo) => {
      let userInfo = loginInfo.user;
      this.globalData.userId = userInfo.employeeCode;
      this.globalData.username = userInfo.name;
      this.globalData.token = loginInfo.access_token;
      this.helper.loadAvatarPath(userInfo.avatarId).subscribe(avatarPath => {
        userInfo.avatarPath = avatarPath;
        this.storage.set('LoginInfo', loginInfo);
      });
    });
  }
}
