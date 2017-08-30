import { Injectable } from '@angular/core';
import { HttpService } from "../../providers/HttpService";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { UserInfo } from "../../model/UserInfo";
declare let hex_md5;

@Injectable()
export class LoginService {
  loginCheckResult: any;
  iSAuthenticate: boolean = false;
  // loginInfo: any;

  constructor(private httpService: HttpService) {
  }


  login(user): Observable<(UserInfo)> {
    let param = {
      'phone': user.phone,
      'password': user.password
    };
    return this.httpService.post('http://quants.sufe.edu.cn/authenticate', param).map((res: Response) => res.json());

  }
}