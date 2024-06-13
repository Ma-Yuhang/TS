export {}
type Person = {
  name?: string
  age: number
  readonly gender: string
}
/**
 * Partial
 */
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
type PersonPartial = MyPartial<Person>

/**
 * Required
 */
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
type PersonRequired = MyRequired<Person>

/**
 * Readonly
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
type PersonReadonly = MyReadonly<Person>

/**
 * Record
 */
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}
type PersonRecord = MyRecord<string, any>

/**
 * Extract 从一个联合类型中选出某些类型
 */
type MyExtract<T, U> = T extends U ? T : never
type PersonExtract = MyExtract<keyof Person, 'name' | 'age'>

/**
 * Exclude 从一个联合类型中排除某些类型
 */
type MyExclude<T, U> = T extends U ? never : T
type PersonExclude = MyExclude<keyof Person, 'name' | 'age'>

/**
 * Pick 从对象类型中选出某些类型形成一个新的对象类型
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type PersonPick = MyPick<Person, 'name' | 'age'>

/**
 * Omit 从对象类型中排除某些类型形成一个新的对象类型
 */
// 方式一
type MyOmit1<T, K extends keyof any> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
// 方式二
type MyOmit2<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type PersonOmit1 = MyOmit1<Person, 'name'>
type PersonOmit2 = MyOmit2<Person, 'name'>

/**
 * ReturnType
 */
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any
type C = MyReturnType<() => void>

/**
 * Parameters
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : any[]
type D = MyParameters<(name: string, age: number) => void>
