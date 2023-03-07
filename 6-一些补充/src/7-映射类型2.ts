export {};

// Record
// type myType1 = string | number;
type myType1 = 'a' | 'b';
type myType2 = {
  name: string;
  age: number;
};
// 传入两个类型返回一个新的类型 谁写在前面谁就作为顶层的键，后面就作为下一层的键
type myType3 = Record<myType1, myType2>;
// 实现myType3
let res3: myType3 = {
  a: {
    name: '',
    age: 18,
  },
  b: {
    name: '',
    age: 18,
  },
};

// pick 将原有类型中的属性部分映射到新类型
type myType4 = {
  name: string;
  age: number;
};
let res4: Pick<myType4, 'name'> = {
  name: '马宇航',
};
// Omit 将原有类型中的属性部分映射到新类型
type myType5 = {
  name: string;
  age: number;
};
let res5: Omit<myType5, 'name'> = {
  age: 18,
};

// OmitThisParameter 从类型中剔除this参数类型，返回一个新类型
function fn1(this: object, x: number) {}
function fn2(x: number) {}

// (x: number) => void
type myType6 = OmitThisParameter<typeof fn1>;
// (x: number) => void
type myType7 = OmitThisParameter<typeof fn2>;

