interface ClassInterface {
  currTime:Date //实例成员变量
  setTime(d:Date):void //实例方法
}

interface ClassConstructorInterface {
  new():void //构造函数方法
}

class MyClass implements ClassInterface {
  setTime(d:Date): void {
    this.currTime = d
  }
  currTime:Date = new Date
  constructor(a:number, b:number){}
}

//error
class MyClass2 implements ClassConstructorInterface {
  setTime(d:Date): void {
    this.currTime = d
  }
  currTime:Date = new Date()
  constructor(a:number, b:number){}
}

