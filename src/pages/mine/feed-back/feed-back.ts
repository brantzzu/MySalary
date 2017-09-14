import { Component } from '@angular/core';
import { FileObj } from "../../../model/FileObj";
import { NavController } from "ionic-angular";
//import { FileService } from "../../../providers/FileService";
import { NativeService } from "../../../providers/NativeService";
import { SMS } from '@ionic-native/sms';
@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html'
})
export class FeedBackPage {
  description: string;
  //fileObjList: FileObj[] = [];
  phoneNumber: any;
  feedbackContent: any;

  constructor(private navCtrl: NavController, private sms: SMS,
    private nativeService: NativeService) {
    //private fileService: FileService
    this.phoneNumber = "13671735030";
    this.feedbackContent = "";
  }

  // save() {
  //   this.fileService.uploadMultiByFilePath(this.fileObjList).subscribe(res => {
  //     this.navCtrl.pop();
  //   });
  // }
  send() {
    let options = {
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'
        //intent: ''
      }
    }
    this.sms.send(this.phoneNumber, this.feedbackContent, options).then(success => {
      //this.nativeService.showToast("发送成功");
      console.log("短信发送成");
      //this.navCtrl.pop();
    }, error => {
      this.nativeService.showToast("发送失败");
    });

  }

}
