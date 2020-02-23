interface ClockInterface {
  tick(): void
}

interface ClockConstructInterface {
  new(hour:number, min:number): ClockInterface
}

function createClock(ctor: ClockConstructInterface, hour: number, min: number): ClockInterface {
  return new ctor(hour, min);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('digital clock');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('analog clock');
  }
}

let dc = createClock(DigitalClock, 12, 1)
let ac = createClock(AnalogClock, 23, 17)

class Parent {
  private name: string
  protected constructor(name:string) {
    this.name = name
  }
}

class Child extends Parent {
  age: number;
  constructor(name:string, age:number) {
    super(name);
    this.age = age;
  }
}

let p = new Parent('p'); // protected constructor
let c = new Child('c', 16);