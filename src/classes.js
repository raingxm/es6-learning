// ES 6 way

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let me = new User('zhangxu', 'raingxm@gmail.com');
me.changeEmail('raingxm@163.com');

console.dir(me);
