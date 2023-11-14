interface Array<T> {
  myMap(
    callbackfn: (value: T, index: number, array: Array<T>) => unknown,
  ): unknown[];
}
type fn = <T>(value: T, index: number, array: T[]) => T;

Array.prototype.myMap = function <T>(callbackfn: fn): unknown[] {
  let arr: T[] = [];
  let length: number = this.length;

  for (let i: number = 0; i < length; i++) {
    let count = callbackfn(this[i], i, this);
    arr.push(count);
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5];

arr.myMap((value, index, array) => {
  console.log(value, index, array);
});

// arr.map((value, index, array) => {
//   console.log(value, index, array);
// });
