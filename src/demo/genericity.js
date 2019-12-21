var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
var t1 = identity('input string');
var t2 = identity('input string');
// 赋值
var identity2 = identity;
// 泛型参数抽取成为接口
var identity3 = identity;
var identity4 = identity;
var identity5 = identity;
function genericIdentify3(arg) {
    console.log(arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
var o = { a: 1, b: 2, c: 3, d: 4 };
getProperty(o, 'a');
// getProperty(o, 'e');
//工厂类
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var LionKeeper = /** @class */ (function () {
    function LionKeeper() {
    }
    return LionKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(cons) {
    return new cons();
}
createInstance(Bee).keeper.nameTag;
createInstance(Lion).keeper.nameTag;
