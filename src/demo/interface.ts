interface SearchConfig {
  (inputA:string, inputB:string) : boolean
}

let myFunc:SearchConfig;
myFunc = function(src, sub) {
  return src.search(sub) > -1;
}

interface Animal {
  name: string
}

interface Dog extends Animal {
  breed: string
}

interface NotOk {
  // [index:number]:Animal //Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  // [index:string]:Dog

  [index:number]:Dog
  [index:string]:Animal
}

interface StringArray {
  [index:string]:number
  name:string //Property 'name' of type 'string' is not assignable to string index type 'number'.
}

interface ReadonlyStringArray {
  readonly [index:number]:string
}
let myArray:ReadonlyStringArray = ['a', 'b']
myArray.push('c')
myArray[1] = 'c'
