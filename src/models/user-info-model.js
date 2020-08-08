import {URL} from '@/const';

class UserInfoModel {
  constructor(data) {
    this.id = parseInt(data[`id`], 10);
    this.email = data[`email`];
    this.name = data[`name`];
    this.avatar = `${URL.FILES_STORAGE}${data[`avatar_url`]}`;
  }

  static parseUserInfo(data) {
    return new UserInfoModel(data);
  }
}

export {UserInfoModel};
