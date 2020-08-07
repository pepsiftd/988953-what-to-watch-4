class UserInfoModel {
  constructor(data) {
    this.id = data[`id`];
    this.email = data[`email`];
    this.name = data[`name`];
    this.avatar = data[`avatar_url`];
  }

  static parseUserInfo(data) {
    return new UserInfoModel(data);
  }
}

export {UserInfoModel};
