// Abstract class
class Appliance {
    constructor(brand) {
      this.brand = brand;
    }
  
    functionality() {
      throw new Error('Functionality method not implemented in the subclass.');
    }
  }
  
  class WashingMachine extends Appliance {
    constructor(brand, loadCapacity) {
      super(brand);
      this.loadCapacity = loadCapacity;
    }
  
    functionality() {
      console.log(`${this.brand} Washing Machine: Cleans and rinses clothes. Load Capacity: ${this.loadCapacity} kg`);
    }
  }
  
  class Refrigerator extends Appliance {
    constructor(brand, capacity) {
      super(brand);
      this.capacity = capacity;
    }
  
    functionality() {
      console.log(`${this.brand} Refrigerator: Keeps food cold. Capacity: ${this.capacity} liters`);
    }
  }
  
  const washingMachine = new WashingMachine('Samsung', 8);
  washingMachine.functionality();
  
  const refrigerator = new Refrigerator('LG', 300);
  refrigerator.functionality();

  