const add = (a: number, b: number): number => {
  return a + b;
};

//bug:returns void
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

//void=>no value
const logger = (message: string): void => {
  console.log(message);
};

let todayWeather = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//destr:
const logWeather1 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

let user = {
  name: 'Matija',
  age: 30,
  coords: {
    lat: 0,
    lng: 20,
  },
};

const { age }: { age: number } = user;
