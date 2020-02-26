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
var greeter;
greeter = new Greeter();
console.log(greeter.greet());
console.log(Greeter.standardGreeting);
