class Engine {
    constructor(type) {
      this.type = type;
    }
  
    start() {
      console.log(`Engine started. Type: ${this.type}`);
    }
  }
  
  class Wheels {
    constructor(count) {
      this.count = count;
    }
  
    rotate() {
      console.log(`Wheels are rotating. Count: ${this.count}`);
    }
  }
  
  class Seats {
    constructor(material) {
      this.material = material;
    }
  
    sit() {
      console.log(`Sitting on seats made of ${this.material}`);
    }
  }
  
  class Car {
    constructor(engine, wheels, seats) {
      this.engine = engine;
      this.wheels = wheels;
      this.seats = seats;
    }
  
    drive() {
      this.engine.start();
      this.wheels.rotate();
      console.log('Car is in motion!');
    }
  
    park() {
      console.log('Car is parked.');
    }
  
    useSeats() {
      this.seats.sit();
    }
  }
  
  const carEngine = new Engine('V6');
  const carWheels = new Wheels(4);
  const carSeats = new Seats('Leather');
  
  const myCar = new Car(carEngine, carWheels, carSeats);
  
  myCar.drive();
  myCar.park();
  myCar.useSeats();
  