import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { HttpService } from "../../../providers/HttpService";
import { Response } from "@angular/http";
import { NativeService } from "../../../providers/NativeService";
import { UserInfo } from "../../../model/UserInfo";

@Component({
  selector: 'page-performanceOrigin',
  templateUrl: 'performanceOrigin.html'
})
export class PerformanceOriginPage {
  httpResponseData: any;
  userInfo: UserInfo;
  salaryYear: String;
  salaryMonth: String;
  noPerformanceOrigin: boolean = false;
  performanceOrigin: any;

  constructor(private navCtrl: NavController,
    private viewCtrl: ViewController,
    private httpService: HttpService,
    private nativeService: NativeService,
    private navParams: NavParams,
    private formBuilder: FormBuilder) {
    this.userInfo = navParams.get("userInfo");
    this.salaryYear = navParams.get("salaryYear");
    this.salaryMonth = navParams.get("salaryMonth");

  };
  ionViewWillEnter() {
    let param = {
      'employeeCode': this.userInfo.employeeCode,
      'salaryYear': this.salaryYear,
      'salaryMonth': this.salaryMonth
    };
    this.httpService.get("http://quants.sufe.edu.cn/performanceOrigin", param).map(res => {
      return res.json();
    }).subscribe((json: any) => {
      //json['performanceDate'] = new Date(Date.parse(json['performanceDate'])).toISOString().split('T')[0]
      console.log("json:");
      console.log(json['performanceDate']);
      this.performanceOrigin = json;
      if (json.length < 1) {
        this.noPerformanceOrigin = true;
      } else {
        this.noPerformanceOrigin = false;
      }
    });

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
