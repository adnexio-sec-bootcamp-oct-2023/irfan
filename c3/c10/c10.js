class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        Vehicle.incrementInstanceCount();
    }

    static instanceCount = 0;

    static incrementInstanceCount() {
        Vehicle.instanceCount++;
    }

    displayDetails() {
        return `Vehicle: ${this.year} ${this.make} ${this.model}`;
    }

    static getNumberOfInstances() {
        return Vehicle.instanceCount;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, mileage) {
        super(make, model, year);
        this.mileage = mileage;
    }

    calculateAge(currentYear) {
        return currentYear - this.year;
    }
}

// Create instances of the Vehicle class
const vehicle1 = new Vehicle('Toyota', 'Camry', 2020);
const vehicle2 = new Vehicle('Honda', 'Civic', 2019);

// Create instances of the Car subclass
const car1 = new Car('Ford', 'Mustang', 2018, 25000);
const car2 = new Car('Chevrolet', 'Camaro', 2017, 32000);

// Display vehicle details
console.log(vehicle1.displayDetails());
console.log(vehicle2.displayDetails());
console.log(car1.displayDetails());
console.log(car2.displayDetails());

// Calculate car age
const currentYear = new Date().getFullYear();
console.log(`Car1 age: ${car1.calculateAge(currentYear)} years`);

// Get the number of vehicle instances created
console.log(`Number of vehicle instances: ${Vehicle.getNumberOfInstances()}`);
