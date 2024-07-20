export {}
const str = '12345'

type StringLen<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}` ? StringLen<R, [...T, F]> : T['length']

type Len = StringLen<typeof str> // 5
