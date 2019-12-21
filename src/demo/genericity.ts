function identity<T>(arg: T):T {
  return arg;
}

let t1 = identity<string>('input string');
let t2 = identity('input string');