namespace A {
  export const a = 10
  export namespace B {
    export const b = 100
  }
}
// 简化命名空间
import b = A.B.b
console.log(A.a);
console.log(A.B.b);
console.log(b);

import {B} from './namespaceTest'
console.log(B.b);
