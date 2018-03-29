import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Config } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { TabModule } from "../pages/tabs/tab.module";
import { LoginModule } from '../pages/login/login.module';
import { HomeModule } from '../pages/home/home.module';
import { MineModule } from '../pages/mine/mine.module';
import { SalaryModule } from '../pages/salary/salary.module';
import { SalaryHistoryModule } from '../pages/salary-history/salary-history.module';
import { PerformanceModule } from '../pages/performance/performance.module';
import { AttendanceModule } from '../pages/attendance/attendance.module';
import { ContractModule } from '../pages/contract/contract.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { Camera } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
//import { Transfer } from '@ionic-native/file-transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { AppMinimize } from '@ionic-native/app-minimize';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { NativeService } from "../providers/NativeService";
import { HttpService } from "../providers/HttpService";
import { FileService } from "../providers/FileService";
import { Helper } from "../providers/Helper";
import { Utils } from "../providers/Utils";
import { HttpModule } from "@angular/http";
import { GlobalData } from "../providers/GlobalData";
import { ENABLE_FUNDEBUG, IS_DEBUG, FUNDEBUG_API_KEY } from "../providers/Constants";
import { Logger } from "../providers/Logger";
import { ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave } from "./modal-transitions";
import { MultiPickerModule } from 'ion-multi-picker';

//declare var require: any;
//let fundebug: any = require("fundebug-javascript");//先安装依赖:cnpm i fundebug-javascript --save
import * as fundebug from 'fundebug-javascript';
fundebug.apikey = FUNDEBUG_API_KEY;
fundebug.releasestage = IS_DEBUG ? 'development' : 'production';//应用开发阶段，development:开发;production:生产
fundebug.silent = !ENABLE_FUNDEBUG;//如果暂时不需要使用Fundebug，将silent属性设为true

export class FunDebugErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    fundebug.notifyError(err);
    console.error(err);
  }
}


@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',//android是'md'
      backButtonText: ''
    }),
    IonicStorageModule.forRoot(),
    TabModule,
    LoginModule,
    HomeModule,
    SalaryModule,
    SalaryHistoryModule,
    MineModule,
    PerformanceModule,
    AttendanceModule,
    ContractModule,
    MultiPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Camera,
    Toast,
    File,
    InAppBrowser,
    ImagePicker,
    Network,
    AppMinimize,
    CallNumber,
    SMS,
    { provide: ErrorHandler, useClass: FunDebugErrorHandler },
    NativeService,
    HttpService,
    FileService,
    Helper,
    Utils,
    GlobalData,
    Logger

  ]
})
export class AppModule {
  constructor(public config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
    this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    this.config.setTransition('modal-scale-enter', ModalScaleEnter);
    this.config.setTransition('modal-scale-leave', ModalScaleLeave);
  }
}
