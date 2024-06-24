export {}
type A = {
  age: number
  name: string
}
type B = {
  name: number
  sex: boolean
}
type AA = keyof A & keyof B
// 1.合并传入的类型，如有冲突，则为联合类型
type Merge1<T, K> = {
  [P in keyof T | keyof K]: P extends keyof T & keyof K
    ? T[P] | K[P]
    : P extends keyof K
    ? K[P]
    : P extends keyof T
    ? T[P]
    : never
}
type MergeA1 = Merge1<A, B>

// 1.合并传入的类型，如有冲突，则以后边传入的类型为准
type Merge2<T, K> = {
  [P in keyof T | keyof K]: P extends keyof K
    ? K[P]
    : P extends keyof T
    ? T[P]
    : never
}

type MergeA2 = Merge2<A, B>
