class Store {
    constructor(name, location) {
      this.name = name;
      this.location = location;
    }
  
    displayInfo() {
      console.log(`Store Name: ${this.name}, Location: ${this.location}`);
    }
  
    changeContextWithCall(newName, newLocation) {
      this.displayInfo.call({ name: newName, location: newLocation });
    }
  
    changeContextWithApply(newName, newLocation) {
      this.displayInfo.apply({ name: newName, location: newLocation });
    }
  
    changeContextWithBind(newName, newLocation) {
      const newContextFunction = this.displayInfo.bind({ name: newName, location: newLocation });
      newContextFunction();
    }
  
    printProperties() {
      console.log(`Store Properties: Name - ${this.name}, Location - ${this.location}`);
    }
  }
  

  const myStore = new Store('SuperMart', 'Downtown');
  myStore.changeContextWithCall('MegaMart', 'Uptown');
  myStore.changeContextWithApply('HyperMart', 'Midtown');
  myStore.changeContextWithBind('MaxiMart', 'Suburb');
  myStore.printProperties();

  