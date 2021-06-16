// type Combine = number | string;
type Combine = number;

function add(num1: Combine, num2: Combine) {
  return num1 + num2;
}

let a = 5;
let b = 10;

console.log(add(5, 10));

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// let person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Matija',
//   age: 30,
//   hobbies: ['sport', 'cooking'],
//   role: [2, 'author'],
// };

let person = {
  name: 'Matija',
  age: 30,
  hobbies: ['sport', 'cooking'],
  role: Role.ADMIN,
};

function printRes(num1: number, num2: number): void {
  console.log(num1 + num2);
}

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

// function addHandler(num1: number, num2: number, cb: Function) {}
function addHandler(num1: number, num2: number, cb: (num: number) => void) {
  let result = num1 + num2;
  cb(result);
}
