"use strict";
function convertNames(str) {
    return str
        .split(' ')
        .map(function (el) { return el.split('').slice(0, 1) + '.'; })
        .join('')
        .toUpperCase();
}
// console.log(convertNames('matija Skorup'));
function sumPos(arr) {
    return arr.filter(function (el) { return el > 0; }).reduce(function (a, b) { return a + b; });
}
// console.log(sumPos([1, 2, 3, -10, -12]));
function matchPoints(arr) {
    var num = 0;
    var myArr = arr
        .map(function (el) { return el.split(':'); })
        .map(function (el) {
        return el[0] > el[1] ? (num += 3) : el[0] == el[1] ? (num += 1) : (num += 0);
    });
    return num;
}
// console.log(matchPoints(['3:1', '3:1', '2:1', '1:1']));
function vowelThere(arr) {
    var vowels = 'aeiou';
    //   let maArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (vowels.indexOf(String.fromCharCode(arr[i])) >= 0) {
            arr[i] = String.fromCharCode(arr[i]);
        }
    }
    return arr;
}
// console.log(vowelThere([101, 121, 110]));
