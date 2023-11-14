"use strict";
Array.prototype.myMap = function (callbackfn) {
    let arr = [];
    let length = this.length;
    for (let i = 0; i < length; i++) {
        let count = callbackfn(this[i], i, this);
        arr.push(count);
    }
    return arr;
};
[1, 2, 3, 4, 5].myMap((value, index, array) => {
    console.log(value, index, array);
});
// [1, 2, 3, 4, 5].map((value, index, array) => {
//   console.log(value, index, array);
// });
//# sourceMappingURL=index.js.map