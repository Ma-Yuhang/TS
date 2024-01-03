"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function debounce(fn: any, delay: any) {
//   let timer: any = undefined;
//   return (...args: any) => {
//     clearTimeout(timer);
//     setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }
function handle(a, b) {
    return a + b;
}
const a = debounce(handle, 1);
a(1, 1);
