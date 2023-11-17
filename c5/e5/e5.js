class Shape {
    area() {
      // The area method is not implemented in the superclass
      throw new Error('Area method not implemented in the superclass.');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    area() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Example usage:
  const circle = new Circle(5);
  console.log('Circle Area:', circle.area()); // Output: Circle Area: 78.53981633974483
  
  const rectangle = new Rectangle(4, 6);
  console.log('Rectangle Area:', rectangle.area()); // Output: Rectangle Area: 24
  
  const triangle = new Triangle(3, 8);
  console.log('Triangle Area:', triangle.area()); // Output: Triangle Area: 12
  