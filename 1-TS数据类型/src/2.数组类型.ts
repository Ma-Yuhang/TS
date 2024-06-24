export default {};

// 方式一
let arr1: number[] = [12, 3];
arr1 = [33, 45];
// arr = [2,'s']

// 方式二
let arr2: Array<number> = [42, 64];

// 联合类型
let arr3: (string | number)[] = [1, 3, 'ad'];

// 任意类型
let arr4: any[] = ['da', true, [], { a: 2 }];
let arr5: Array<any> = ['da', true, [], { a: 2 }];
