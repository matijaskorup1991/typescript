// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//   summary(): string;
// }
interface Vehicle {
  summary(): string;
}

let civic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `name is: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return this.color;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

// printVehicle(civic);
