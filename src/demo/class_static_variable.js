var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "hello";
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
console.log(Greeter.standardGreeting);
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "welcome";
var greeter2 = new Greeter();
console.log(greeter2.greet());
