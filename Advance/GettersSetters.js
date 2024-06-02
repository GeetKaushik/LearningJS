class User {
  constructor(username, password) {
    this._usrname = username
    this._password = password
  }
  get usrname() {
    return this._usrname
  }
  set usrname(name) {
    this._usrname = name
  }
  get password() {
    return this._password
  }
  set password(pass) {
    this._password = pass
  }
}

const Usr1 = new User('Geet', '123abc')

console.log(Usr1.usrname)

