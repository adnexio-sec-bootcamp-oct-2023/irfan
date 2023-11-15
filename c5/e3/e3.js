//class es6 
class Vehicle {
    constructor(brand, speed = 0) {
      this.brand = brand;
      this.speed = speed;
    }
  
    accelerate(acceleration) {
      this.speed += acceleration;
      console.log(`${this.brand} is accelerating. Current speed: ${this.speed} km/h`);
    }
  
    brake(deceleration) {
      if (this.speed - deceleration >= 0) {
        this.speed -= deceleration;
      } else {
        this.speed = 0;
      }
      console.log(`${this.brand} is braking. Current speed: ${this.speed} km/h`);
    }
}
//class es6 extend car
class Car extends Vehicle{
    constructor(brand, speed, numOfWheels){
        
    }
}

class Bike extends Vehicle{

}
  
  // Example usage:
  const myCar = new Vehicle('Toyota', 60);
  myCar.accelerate(20);  
  myCar.brake(30);       
  