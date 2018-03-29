import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { HttpService } from "../../../providers/HttpService";
import { Response } from "@angular/http";
import { NativeService } from "../../../providers/NativeService";
import { UserInfo } from "../../../model/UserInfo";

@Component({
  selector: 'page-performanceDetail',
  templateUrl: 'performanceDetail.html'
})
export class PerformanceDetailPage {
  registerForm: any;
  httpResponseData: any;
  userInfo: UserInfo;
  salaryYear: String;
  salaryMonth: String;
  noPerformanceDeduction: boolean = false;
  performanceDeductionDetail: any;

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
      'phone': this.userInfo.phone,
      'salaryYear': this.salaryYear,
      'salaryMonth': this.salaryMonth
    };
    this.httpService.get("http://quants.sufe.edu.cn/performanceDeductionDetail", param).map(res => {
      return res.json();
    }).subscribe((json: any) => {
      this.performanceDeductionDetail = json;
      if (json.length < 1) {
        this.noPerformanceDeduction = true;
      } else {
        this.noPerformanceDeduction = false;
      }
    });

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
