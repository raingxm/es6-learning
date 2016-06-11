// ES 6 way

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(...args) {
    return new User(...args);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let me = User.register('zhangxu1', 'raingxm@gmail.com');
// let me = new User('zhangxu', 'raingxm@gmail.com');
// me.changeEmail('raingxm@163.com');

console.dir(me);
