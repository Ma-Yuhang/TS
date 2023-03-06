export default {};

// 函数重载

// 不使用函数重载
function fn(x: number | string, y: number | string) {
  // typeof 类型缩小
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  if (typeof x === 'number' && typeof y === 'string') {
    return x + y;
  }
  if (typeof x === 'string' && typeof y === 'number') {
    return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
}

// 使用函数重载
function fn1(x: number, y: number): number;
function fn1(x: string, y: number): string;
function fn1(x: number, y: string): string;
function fn1(x: string, y: string): string;

function fn1(x: any, y: any) {
  return x + y;
}
fn1(1, 2);

function star(s1: string): void;
function star(s1: string, n1: number): void;

function star(x: string, y?: number) {}
