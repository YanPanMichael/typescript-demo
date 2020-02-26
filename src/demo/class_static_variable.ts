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

let greeter: Greeter;
greeter = new Greeter();
console.log(greeter.greet());
console.log(Greeter.standardGreeting);
