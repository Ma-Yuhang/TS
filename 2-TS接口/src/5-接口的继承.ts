export default {};

// 接口的继承

// 继承一个
interface IA {
  a: number;
}
interface IB extends IA {
  b: number;
}

let ab: IB = {
  a: 1,
  b: 2,
};

// 继承多个
interface IC {
  c: number;
}
interface ID {
  d: number;
  // e: string  // 类型必须兼容 不能出现属性名相同而类型不同的情况
}
interface IE extends IC, ID {
  e: number;
}
let cde: IE = {
  c: 1,
  d: 2,
  e: 3,
};
