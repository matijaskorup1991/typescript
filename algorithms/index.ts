function convertNames(str: string): string {
  return str
    .split(' ')
    .map((el) => el.split('').slice(0, 1) + '.')
    .join('')
    .toUpperCase();
}

// console.log(convertNames('matija Skorup'));

function sumPos(arr: number[]): number {
  return arr.filter((el) => el > 0).reduce((a, b) => a + b);
}

// console.log(sumPos([1, 2, 3, -10, -12]));

function matchPoints(arr: string[]): number {
  let num = 0;
  let myArr = arr
    .map((el) => el.split(':'))
    .map((el) =>
      el[0] > el[1] ? (num += 3) : el[0] == el[1] ? (num += 1) : (num += 0)
    );
  return num;
}

// console.log(matchPoints(['3:1', '3:1', '2:1', '1:1']));

function vowelThere(arr: number[]): number[] | string[] {
  let vowels = 'aeiou';
  //   let maArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (vowels.indexOf(String.fromCharCode(arr[i])) >= 0) {
      arr[i] = String.fromCharCode(arr[i]);
    }
  }
  return arr;
}

// console.log(vowelThere([101, 121, 110]));

function lengthOfLongestSubstring(s: string): number {
  let arr = s.split('');
  let max = 0;
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if ([...arr].slice(0, i).includes(arr[i])) {
      max = Math.max(max, temp);
      temp = 0;
    }
    temp++;
  }
  return Math.max(max, temp);
}

// console.log(lengthOfLongestSubstring('abcabcbb'));

function indexOfChar(str: string, char: string): number {
  let count = 0;
  let position = str.indexOf(char);
  while (position !== -1) {
    count++;
    position = str.indexOf(char, position + 1);
  }

  return count;
}

// console.log(indexOfChar('matija', 'a'));
