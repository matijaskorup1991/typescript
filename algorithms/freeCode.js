"use strict";
function sumRange(arr) {
    let res = 0;
    let myArr = arr.sort((a, b) => a - b);
    for (let i = myArr[0]; i <= myArr[myArr.length - 1]; i++) {
        res += i;
    }
    return res;
}
// console.log(sumRange([4, 1]));
function diff(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    return newArr.filter((el) => !arr1.includes(el) || !arr2.includes(el));
}
// console.log(diff([1, 2, 3, 4], [1, 2, 3, 4, 5]));
function convertToRoman(num) {
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        XXX: 30,
        XX: 20,
        X: 10,
        IX: 9,
        VIII: 8,
        VII: 7,
        VI: 6,
        V: 5,
        IV: 4,
        III: 3,
        II: 2,
        I: 1,
    };
    let res = '';
    for (let item in roman) {
        while (num >= roman[item]) {
            res += item;
            num -= roman[item];
        }
    }
    return res;
}
//
function where(collection, source) {
    let arr = collection.filter((el) => {
        for (let i in source) {
            if (source[i] != el[i]) {
                return false;
            }
            return true;
        }
    });
    return arr;
}
// console.log(
//   where(
//     [
//       { first: 'John', last: 'Doe' },
//       { first: 'Jane', last: 'Smith' },
//     ],
//     { first: 'Jane' }
//   )
// );
function myReplace(str, before, after) {
    let regex = /[A-Z]/g;
    let word = after;
    if (regex.test(before.charAt(0))) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return str.replace(before, word);
}
// console.log(
//   myReplace(
//     'lorem ipsum dolor sit Amet, consectetur adipiscing',
//     'Amet',
//     'test'
//   )
// );
function translate(str) {
    let regex = /[aeiou]/;
    if (regex.test(str.charAt(0)))
        return str + 'way';
    return str.slice(1) + 'ay';
}
// console.log(translate('apple'));
