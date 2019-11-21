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