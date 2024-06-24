export {};

// 泛型约束

// 第一种
function fn1<T>(arr: T): T {
  // console.log(arr.length); // 不能通过

  return arr;
}
let f1 = fn1<string>('adc');

// 第二种
function fn2<T>(arr: Array<T>): T[] {
  // 代表的是T类型的数组,所以只能传入数组
  console.log(arr.length);

  return arr;
}
// let f2 = fn2('adada')
let f2 = fn2<number>([1, 2]);

// 第三种 泛型接口
interface ILength {
  length: number
}
function fn3<T extends ILength>(arr: T): T {
  console.log(arr.length);
  
  return arr
}
// 都必须具备length属性 才可通过
let f3 = fn3('adada')
let f33 = fn3(['ada'])
let f333 = fn3({length: 2})