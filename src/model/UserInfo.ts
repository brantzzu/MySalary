export interface UserInfo {
  id: string;
  userName: string;
  phone: string;
  avatarId: string;
  avatarPath: string;
  description: string;
  token: string;
  password: string;
  //post: any;
}
export interface LoginInfo {
  access_token: string;
  user: UserInfo;
}