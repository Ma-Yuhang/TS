export {}

interface Person {
  name: string
  age: number
  gender: string
}

// 全部变成可选
// type Optional<T> = {
//   [P in keyof T]?: T[P];
// };
// type Optional = Partial<Person>

// 部分变成可选
// 排除掉传入的类型 跟 选出来传入的类型做可选 进行 合并(&)
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

let p: Optional<Person, 'name' | 'age'>
