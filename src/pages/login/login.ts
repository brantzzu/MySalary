import { Component } from '@angular/core';
import { ModalController, ViewController, Platform, AlertController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from "rxjs";
import { LoginService } from './LoginService';
import { FindPasswordPage } from './find-password/find-password';
import { RegisterPage } from './register/register';
import { UserInfo, LoginInfo } from "../../model/UserInfo";
import { NativeService } from "../../providers/NativeService";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  userInfo: UserInfo;
  submitted: boolean = false;
  canLeave: boolean = false;
  loginForm: any;
  loginInfo: LoginInfo;

  constructor(private viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private modalCtrl: ModalController,
    private platform: Platform,
    private alertCtrl: AlertController,
    private events: Events,
    private nativeService: NativeService,
    private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      //phone: ['', [Validators.required, Validators.pattern('1[0-9]{10}')]],// 第一个参数是默认值
      phone: ['', [Validators.required, Validators.pattern('1[0-9]{10}')]],
      password: ['', [Validators.required]]
    });
  }

  ionViewWillEnter() {
    this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
      this.userInfo = loginInfo && loginInfo.user ? loginInfo.user : null;
    });
    this.canLeave = false;
  }

  ionViewCanLeave(): boolean {
    let bool = !!this.userInfo;
    console.log("this.isableToLeave");
    console.log(this.canLeave);
    if (this.canLeave || bool) {
      return true;
    } else {
      this.alertCtrl.create({
        title: '确认退出软件？',
        buttons: [{ text: '取消' },
        {
          text: '确定',
          handler: () => {
            this.platform.exitApp();
          }
        }
        ]
      }).present();
      return false;
    }
  }

  login(user) {
    this.submitted = true;
    this.loginService.login(user)
      .subscribe(loginUser => {
        console.log("logiInfo:");
        console.log(loginUser);
        // console.log("loginInfo.user:" + loginInfo.user);
        if (loginUser == null) {
          this.nativeService.showToast('用户名或密码错误');
          this.submitted = false;
        } else {
          this.nativeService.showToast('登录成功');
          this.submitted = false;
          this.userInfo = loginUser;
          let loginInfo = {
            access_token: this.userInfo.token,
            user: {
              id: loginUser.id,
              userName: loginUser.userName,
              phone: loginUser.phone,
              avatarId: '',
              description: '',
            }

          };
          this.loginInfo = Observable.create((observer) => {
            observer.next(loginInfo);
          });
          this.events.publish('user:login', loginInfo);
          this.viewCtrl.dismiss(loginUser);
        }

      }, err => {
        this.submitted = false;
      });
  }


  toRegister() {
    console.log("toRegister:");
    console.log(this.canLeave);
    this.canLeave = true;
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();

  }

  findPassword() {
    this.canLeave = true;
    let modal = this.modalCtrl.create(FindPasswordPage);
    modal.present();

  }

}