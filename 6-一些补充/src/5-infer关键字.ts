export {};

// infer

// 假如想获取数组中元素的类型  传入一个类型，如果是数组就返回元素的类型，否则就返回这个类型本身
type myType1<T> = T extends string[] ? string : T extends number[] ? number : T;
type res1 = myType1<string>; // string
type res11 = myType1<string[]>; // 也是string 符合
// 方式一
type Flatten<T> = T extends any[] ? T[number] : T;
// 方式二 使用infer简化
type myType2<T> = T extends (infer E)[] ? E : T; // E就是推断出的array中元素的类型
type res2 = myType1<string>; // string)
type res22 = myType1<string[]>; // 也是string 符合

// infer可以推断出联合类型
type myType3<T> = T extends { a: infer U; b: infer U } ? U : T;
type res3 = myType3<{ a: string; b: number }>; // string | number
