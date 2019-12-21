function identity<T>(arg: T):T {
  return arg;
}

let t1 = identity<string>('input string');
let t2 = identity('input string');

// 赋值
const identity2: <T>(arg: T) => T = identity;

// 泛型参数抽取成为接口
const identity3: {<T>(arg: T[]): T[]} = identity;

interface genericIdentify {
  <T>(arg:T): T
}
const identity4: genericIdentify = identity;

// 提出T 可以使得类型作为一个变量传递
interface genericIdentify2<T> {
  (arg:T): T
}
const identity5: genericIdentify2<number> = identity;