import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MinePage } from './mine';
import { MineEditPage } from './mine-edit/mine-edit';
import { MineEditModalPage } from './mine-edit-modal/mine-edit-modal';
import { MineEditAvatarModalPage } from './mine-edit-avatar-modal/mine-edit-avatar-modal';
import { FeedBackPage } from "./feed-back/feed-back";
import { AboutPage } from "./about/about";
import { UpdateLogPage } from "./update-log/update-log";
import { ShowPicturesPage } from "./show-pictures/show-pictures";
import { SelectPicturePageModule } from "../../shared/select-picture/select-picture.module";
import { MineService } from "./MineService";
import { SettingPage } from "./setting/setting";
import { ChangePasswordPage } from "./change-password/change-password";


@NgModule({
  imports: [IonicModule, SelectPicturePageModule],
  declarations: [MinePage, MineEditPage, MineEditModalPage, MineEditAvatarModalPage, FeedBackPage, AboutPage, UpdateLogPage, ShowPicturesPage, SettingPage, ChangePasswordPage,],
  entryComponents: [MinePage, MineEditPage, MineEditModalPage, MineEditAvatarModalPage, FeedBackPage, AboutPage, UpdateLogPage, ShowPicturesPage, SettingPage, ChangePasswordPage],
  providers: [MineService],
  exports: [IonicModule]
})
export class MineModule {
}