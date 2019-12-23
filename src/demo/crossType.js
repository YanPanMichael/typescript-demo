function extend(first, second) {
    var result = {};
    for (var id in first) {
        if (!result.hasOwnProperty(id)) {
            result[id] = first[id];
        }
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var LoggerClass = /** @class */ (function () {
    function LoggerClass() {
    }
    LoggerClass.prototype.log = function () {
        ///
    };
    return LoggerClass;
}());
var combine = extend(new Person('aaa'), new LoggerClass());
combine.name;
combine.log();
