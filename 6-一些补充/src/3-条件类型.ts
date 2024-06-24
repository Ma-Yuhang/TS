export {};

// 使用函数重载
function fn1(x: number, y: number): number;
function fn1(x: string, y: number): string;
function fn1(x: number, y: string): string;
function fn1(x: string, y: string): string;

function fn1(x: any, y: any) {
  return x + y;
}
fn1(1, 2);

// 使用条件类型