export default {};

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
let fn1 = new Fn1(1, 2);
console.log(fn1.sum());
