let passwd = 'screct passwd'

class Employee {
  private _fullname:string
  constructor(name:string) {
    this._fullname = name
  }
  get fullname():string {
    return this._fullname;
  }
  set fullname(newName:string) {
    if(passwd && passwd === 'screct passwd') {
      this._fullname = newName
    } else {
      console.log('error, passwd is wrong')
    }
  }
}

let employee = new Employee('Max');
if(employee.fullname) {
  console.log(employee.fullname)
}

