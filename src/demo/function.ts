let myFunc2: (x:number, y:number) => number = function(x:number, y:number):number {
  return x + y
}

function buildName(fn:string, ln?:string):string {
  return fn + ' ' + ln
}

function buildName2(fn:string, ...restName:string[]):string {
  return fn + ' ' + restName
}

buildName('Bob')