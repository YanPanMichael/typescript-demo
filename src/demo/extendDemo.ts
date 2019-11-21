interface a {
  name: string
}

interface b {
  age: number
}

interface c extends a, b {
  sex: string
}

let x = {} as c;
x.name = "Tom"
x.age = 12
x.sex = "M"