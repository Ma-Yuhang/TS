export {}

const str = '12345'

// 翻转字符串类型
type ReverseString<S extends string> = S extends `${infer F}${infer R}`
  ? `${ReverseString<R>}${F}`
  : S

type X = ReverseString<typeof str> // "54321"

// 翻转数组类型
type ReverseArray<T extends any[]> = T extends [infer F, ...infer R]
  ? [...ReverseArray<R>, F]
  : T

type X1 = ReverseArray<[1, 2, 3]> // [3, 2, 1]
