interface Array<T> {
  myMap<K>(callbackfn: (value: T, index: number, array: T[]) => K): K[];
}

Array.prototype.myMap = function <T, K>(
  callbackfn: (value: T, index: number, array: T[]) => K,
): K[] {
  let arr: K[] = [];
  let length: number = this.length;

  for (let i: number = 0; i < length; i++) {
    let value = callbackfn(this[i], i, this);
    arr.push(value);
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5];

const newArr = arr.myMap((value, index, array) => {
  return value.toString();
});

console.log(newArr);

// arr.map((value, index, array) => {
//   console.log(value, index, array);
// });
