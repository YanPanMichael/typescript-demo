function createClock(ctor, hour, min) {
    return new ctor(hour, min);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('digital clock');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('analog clock');
    };
    return AnalogClock;
}());
var dc = createClock(DigitalClock, 12, 1);
var ac = createClock(AnalogClock, 23, 17);
