export default {};

// this的使用

class Fn1 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  sum() {
    return this.x + this.y;
  }
}

class Fn2 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  sum(this: Fn2) {
    return this.x + this.y;
  }
}

class Fn3 {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  sum(this: void) {
    return 1; // 不可以使用this
  }
}
let fn2 = new Fn2(1, 2);
let fn3 = new Fn3(3, 4);
console.log(fn3.sum());

