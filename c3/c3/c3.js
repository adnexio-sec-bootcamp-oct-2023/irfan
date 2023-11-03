//combining arrays
let vehicles1 = ['motorcycle', 'bicycle', 'scooter'];
let vehicles2 = ['car', 'van', 'bus'];
let allVehicles = [...vehicles1, ...vehicles2];
console.log(allVehicles);

//copying an array
let animals1 = ['monkey', 'fish'];
let animals2 = [...animals1];
console.log(animals2);

//spreading elements in function arguments
function volume(h, w, l){
    return h * w * l;
}
let numbers = [2, 3, 4];
let result = volume(...numbers);
console.log(result);

//spreading object properties
let profile1 = { name: 'Irfan ', age: 29 };// {} = used to create objects
let profile2 = { ...profile1, city: 'Kuala Lumpur'};
console.log(profile2); //output in { }
console.log( profile1.name + profile1.age, profile2.city); //testing print without { and }

//cloning an object with nested properties
let originalObject = { 
    name: 'Honda', 
    type: { 
        model: 'City', 
        year: '2023' 
    } 
};

let clonedObject = { 
    ...originalObject, 
    type: { ...originalObject.type } 
};

clonedObject.type.model = 'Civic';
console.log(originalObject.type.model); // Output:
console.log(clonedObject.type.model); // Output: