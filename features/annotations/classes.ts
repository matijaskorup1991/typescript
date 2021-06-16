class Vehicle {
  color: string = 'red';

  constructor(color: string) {
    this.color = color;
  }
  public drive(): void {
    console.log('drive');
  }
  private start(): void {
    console.log('start');
  }
  startDrive(): void {
    this.start();
  }
  protected end(): void {
    console.log('end');
  }
}

// const vehicle = new Vehicle();
class Car extends Vehicle {}
// vehicle.drive();
const car = new Car('red');
// car.startDrive();
// car.end();
