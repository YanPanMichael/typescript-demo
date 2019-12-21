var genericClass = /** @class */ (function () {
    function genericClass() {
    }
    return genericClass;
}());
var g1 = new genericClass();
g1.type = 1;
g1.myFunc = function (x, y) {
    return x + y;
};
var g2 = new genericClass();
g2.type = 'a';
g2.myFunc = function (x, y) {
    return x + y;
};
console.log(g2.myFunc(g2.type, 'b'));
