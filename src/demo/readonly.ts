let a: number[] = [1, 2, 3];
let b: ReadonlyArray<number> = a;

//error
b.push(4)
b.length = 9
b[2] = 5

a = b;
//right
a = b as number[];