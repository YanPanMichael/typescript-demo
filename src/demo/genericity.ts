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

interface TextendInferface {
  length: number
}

function genericIdentify3<T extends TextendInferface>(arg: T): T { //通过继承接口 接口中有length属性 实现.length不报错
  console.log(arg.length);
  return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let o = {a: 1, b: 2, c: 3, d: 4};
getProperty(o, 'a');
// getProperty(o, 'e');

//工厂类
class BeeKeeper {
  nameTag!: string
}

class LionKeeper {
  nameTag!: string
}

class Animal {
  numLengs!: number
}

class Bee extends Animal {
  keeper!: BeeKeeper
}

class Lion extends Animal {
  keeper!: LionKeeper
}

function createInstance<T extends Animal>(cons: new() => T): T { // 参数为构造函数类型 new() => T
  return new cons()
}

createInstance(Bee).keeper.nameTag
createInstance(Lion).keeper.nameTag