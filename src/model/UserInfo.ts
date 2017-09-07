export interface UserInfo {
  id: string;
  name: string;
  account: String;
  employeeCode: string;
  phone: string;
  avatarId: string;
  avatarPath: string;
  description: string;
  token: string;
  password: string;
  erpCode: string;
  post: any;
}
export interface LoginInfo {
  access_token: string;
  user: UserInfo;
}