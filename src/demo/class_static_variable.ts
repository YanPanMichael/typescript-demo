class Greeter {
  static standardGreeting: string = "hello";

  greeting: string | undefined;

  constructor(msg?: string) {
    this.greeting = msg;
  }

  greet() {
    if (this.greeting) {
      return "hello, " + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter: Greeter = new Greeter();
console.log(greeter.greet());
console.log(Greeter.standardGreeting);

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "welcome";
let greeter2 = new Greeter();
console.log(greeter2.greet());
