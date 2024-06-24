export {};

// unknown
// 1.任何类型都可以分配给unknown类型
let b: unknown;
b = 1;
b = '2';
b = false;
b = [];

// 2.不能将unknown类型分配给除了unknown类型和any类型的其他类型
let a: unknown = 18;
// let c: number = a
// let c1: string = a
let c2: unknown = a;
let c3: any = a;
// let c4: never = a
// 解决方案
// (1)使用类型断言
let c: number = a as number;
console.log(c);
// (2)使用typeof类型缩小
let d: number;
if (typeof a === 'number') {
  d = a;
  console.log(d);
}

// 3.unknown类型与任何其他类型组成的交叉类型最后都是其他类型
type myType1 = unknown & number; // number类型
type myType2 = unknown & string; // string类型
type myType3 = boolean & unknown; // boolean类型

// 4.unknown除了与any外，与其他任何类型组成的联合类型最后都是unknown类型
type myType4 = unknown | number; // unknown类型
type myType5 = unknown | string; // unknown类型
type myType6 = any & unknown; // any类型

// 5.never类型是unknown类型的子类型
type myType7 = never extends unknown ? true : false; // true
