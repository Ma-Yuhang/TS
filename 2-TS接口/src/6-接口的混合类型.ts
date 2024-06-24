export default {};

// 接口的混合类型

interface Counter {
  (n: number): string;
  increase(): void;
  msg: string;
}

function fn(): Counter {
  const counter: Counter = function (n: number) {
    return 's';
  };
  counter.msg = '1';
  counter.increase = function () {};
  return counter;
}
let fn1 = fn()
fn1(1)
fn1.msg = 'a'
fn1.increase()