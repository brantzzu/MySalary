import { Injectable } from '@angular/core';
import { NativeService } from "./NativeService";
import { Observable } from "rxjs";
import { DEFAULT_AVATAR, FILE_SERVE_URL } from "./Constants";
import { FileService } from "./FileService";
import { Result } from "../model/Result";
import { App } from 'ionic-angular';
//import { ViewChild } from '@angular/core';
import { HttpService } from "../providers/HttpService";

/**
 * Helper类存放和业务有关的公共方法
 * @description
 */
@Injectable()
export class Helper {
    httpResponseData: any;

    constructor(
        public app: App,
        private fileService: FileService,
        private httpService: HttpService,
        private nativeService: NativeService) {
    }



    /**
     * 获取用户头像路径
     * @param avatarId
     * @returns {any}
     */
    loadAvatarPath(avatarId) {
        return Observable.create(observer => {
            if (!avatarId) {
                observer.next(DEFAULT_AVATAR);
            } else {
                this.fileService.getFileInfoById(avatarId).subscribe((res: Result) => {
                    if (res.success) {
                        let avatarPath = FILE_SERVE_URL + res.data.origPath;
                        observer.next(avatarPath);
                    } else {
                        observer.next(DEFAULT_AVATAR);
                    }
                }, () => {
                    observer.next(DEFAULT_AVATAR);
                })
            }
        });
    }

}
