export {}

interface Person {
  name: string
  age: number
  gender?: string // 可选字段
}

// 将类型字段重命名
// type ReName1<T> = {
//   [K in keyof T as `get${string & K}`]: T[K];
// }
// let rename1: ReName1<Person>

// 变成驼峰
// type ReName2<T, U extends string> = {
//   [K in keyof T as `${U}${Capitalize<string & K>}`]: T[K];
// }
// type A = ReName2<Person, 'Get'>

type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

let keys: GetOptional<Person> = {}

keys.gender = 'male'
