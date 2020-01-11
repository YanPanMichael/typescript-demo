interface SearchConfig {
  (inputA: string, inputB: string): boolean;
}

let myFunc: SearchConfig;
myFunc = function(src, sub) {
  return src.search(sub) > -1;
};

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface NotOk {
  // [index:number]:Animal //Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  // [index:string]:Dog

  [index: number]: Dog;
  [index: string]: Animal;
}

interface StringArray {
  [index: string]: number;
  name: string; //Property 'name' of type 'string' is not assignable to string index type 'number'.
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["a", "b"];
myArray.push("c"); //error
myArray[1] = "c"; //error

interface SquareConfig {
  [propanme: string]: any;
}

interface SearchFunc {
  (a: string, b: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(c, d) {
  return c.search(d) > -1;
};

//混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function(start: number) {} as Counter;
  counter.interval = 10;
  counter.reset = function() {};
  return counter;
}

let co = getCounter();
co(11);
co.reset();



interface A {
  varA: string;
  funA(): void;
}

interface B {
  varB: number;
  funB(input: string): void;
}

interface C extends A, B{ //接口可以多个继承
  varC: ReadonlyStringArray;
  funC(input: string): boolean;
  funA(): Boolean;
  [index:number]:string;
}

abstract class ClassD {
  varD: string;
  constructor(varD: string) {
    this.varD = varD;
  }
  abstract funD(): void;
  funDD() {
    console.log('class function DD')
  }
}

class ClassB {
  protected varclassB:string = ''
}

class ClassC extends ClassB{ //类只能单继承 但是可以多实现
  varclassC:string = ''
}

class classA extends ClassD implements C, B {
  funD(): void {
    throw new Error("Method not implemented.");
  } //类 单继承 多实现
  [index: number]: string;
  varC: ReadonlyStringArray = [];  
  funA(): Boolean {
    throw new Error("Method not implemented.");
  }
  varB: number;
  varA: string;
  constructor(input: string) {
    super(input);
    this.varB = 1;
    this.varA = ''
  }
  funB(name:string) {

  }
  funC(name:string) {
    return true;
  }
}
