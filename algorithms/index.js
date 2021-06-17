"use strict";
function convertNames(str) {
    return str
        .split(' ')
        .map(function (el) { return el.split('').slice(0, 1) + '.'; })
        .join('')
        .toUpperCase();
}
console.log(convertNames('Matija Skorup'));
