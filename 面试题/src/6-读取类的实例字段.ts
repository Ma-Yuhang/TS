export {};

class A {
  a: number = 1;
  b: string = '';
}

// type AFields = keyof A;
type AFields = keyof InstanceType<typeof A>;
const a: AFields = 'a';

console.log(a);
