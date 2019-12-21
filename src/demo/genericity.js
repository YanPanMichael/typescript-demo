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
