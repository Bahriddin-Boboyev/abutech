"use strict";
Array.prototype.myMap = function (callbackfn) {
    let arr = [];
    let length = this.length;
    for (let i = 0; i < length; i++) {
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
//# sourceMappingURL=index.js.map