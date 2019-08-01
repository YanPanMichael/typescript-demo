function aaa(): void {
  console.log("hahaha")
}

let bbb: void = undefined;

let u:undefined | null = undefined;
let n:null = null;

function error(message: string): never {
  throw new Error(message);
}

function loop(): never {
  while(true) {
  }
}

//assume
let input: any = 'this is string';
let inputLength: number = (<string>input).length
let inputLength2: number = (input as string).length