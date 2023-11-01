var numberOfWheels = 2;
var vehicleType;

switch (numberOfWheels) {
    case 2:
        vehicleType = "Bike";
        break;
    case 4:
        vehicleType = "Car";
        break;
    default:
        vehicleType = "Unknown";
}

console.log("Number of Wheels: " + numberOfWheels);
console.log("Type of Vehicle: " + vehicleType);
