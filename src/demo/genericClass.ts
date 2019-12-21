class genericClass<T> {
  type!: T;
  myFunc!: (x: T, y: T) => T;
}

let g1 = new genericClass<number>();
g1.type = 1;
g1.myFunc = (x, y) => {
  return x + y;
};

let g2 = new genericClass<string>();
g2.type = 'a';
g2.myFunc = (x, y) => {
  return x + y;
};

console.log(g2.myFunc(g2.type, 'b'))
