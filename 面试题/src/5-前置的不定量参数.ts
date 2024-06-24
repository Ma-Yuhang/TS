export {};

type BasicType = keyof BasicTypeMap;
type BasicTypeMap = {
  string: string;
  number: number;
  boolean: boolean;
  null: null;
  undefined: undefined;
  symbol: symbol;
  bigint: bigint;
};
type ArgsType<T extends BasicType[]> = {
  [I in keyof T]: BasicTypeMap[T[I]];
};

declare function addImpl<T extends BasicType[]>(
  ...args: [...T, (...args: ArgsType<T>) => any]
): void;

// 有这么一个函数，接收不确定个参数，最后一个参数是一个函数，但是前边的参数是跟最后一个函数的参数类型一致
// 'string', 'number', 'boolean' => (a: string, b: number, c, :boolean)
addImpl('number', 'boolean', 'string', (a, b, c) => {});
