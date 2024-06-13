export {}

type UnionToIntersection<U> = (
  U extends any ? (args: U) => any : never
) extends (args: infer I) => any
  ? I
  : never

type A = UnionToIntersection<{ id: 1 } | { name: 2 }>
type B = UnionToIntersection<string | number>
