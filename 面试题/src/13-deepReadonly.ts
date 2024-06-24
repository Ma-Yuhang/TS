export {}

const obj = {
  name: 'why',
  age: 18,
  height: 1.88,
  hobbies: ['篮球', '足球', '游戏'],
  address: {
    city: '北京',
    street: '长安街',
  },
}

type DeepReadonly<T extends Record<string, any>> = {
  readonly [P in keyof T]: T[P] extends Record<string, any>
    ? DeepReadonly<T[P]>
    : T[P]
}
// 小技巧 若要看最终结果可以这样写：
// type DeepReadonly<T extends Record<string, any>> = T extends any ? {
//   readonly [P in keyof T]: T[P] extends Record<string, any> ? DeepReadonly<T[P]> : T[P]
// } : never
type DeepReadonlyResult = DeepReadonly<typeof obj>
