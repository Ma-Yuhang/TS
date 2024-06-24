export {};

declare function debounce<A extends any[], R>(
  fn: (...args: A) => R,
  delay: number
): (...agrs: A) => void;

// function debounce(fn: any, delay: any) {
//   let timer: any = undefined;
//   return (...args: any) => {
//     clearTimeout(timer);
//     setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

function handle(a: number, b: number) {
  return a + b;
}

const a = debounce(handle, 1);
a(1, 1);
