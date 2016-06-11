// ES 5 way

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.changeEmailAddress = function(newEmail) {
  this.email = newEmail;
};

var user = new User('zhangxu', 'raingxm@gmail.com');

user.changeEmailAddress('raingxm@163.com');

console.dir(user);
