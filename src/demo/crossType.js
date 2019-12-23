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
// 联合类型
function paddingLeft(value, padding) {
    if (typeof padding === 'string') {
        return value + padding;
    }
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    throw new Error('input target type not number or string');
}
