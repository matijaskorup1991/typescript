let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let test: null = null;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4];

class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = { x: 20, y: 30 };

//functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let json = '{"x": 20, "y": 30}';
let parsed = JSON.parse(json);
