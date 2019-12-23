function extend<T, U>(first: T, second: U): T & U {
  let result = {} as T & U
  for (const id in first) {
    if (!result.hasOwnProperty(id)) {
      result[id] = first[id] as any;
    }
  }
  for (const id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any;
    }
  }
  return result;
}

class Person {
  constructor(public name: string){
  }
}

interface loger{
  log(): void
}

class LoggerClass implements loger {
  log() {
    ///
  }
}

let combine = extend(new Person('aaa'), new LoggerClass());
combine.name
combine.log()

// 联合类型
function paddingLeft(value: string, padding: string|number): string|number {
  if(isString(padding)) {
      return value + padding;
  }
  if(isNumber(padding)) {
      return Array(padding + 1).join(' ') + value;
  }
  throw new Error('input target type not number or string')
}

// 类型断言
function isNumber(padding: any): padding is number {
  return typeof padding === 'number';
}
function isString(padding: any): padding is string {
  return typeof padding === 'string';
}