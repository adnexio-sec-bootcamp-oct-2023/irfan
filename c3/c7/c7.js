//array destructuring
const car = {
    name: 'Mini Cooper',
    brand: 'BMW',
    door: '3 door',
}
let {name, brand, door} = car;
console.log("===Dreams Car===");
console.log(name);
console.log(brand);
console.log(door);

//default values
const vegetables = {vege:'celery'};
const {vege, price = 3.99} = vegetables;
console.log("===Item Price===");
console.log(vege);
console.log("RM " + price);

//nested object de-structuring
const user ={
    info:   {
        staff: 'Irfan',
        staffID: 'M0752',
    },
    userClockIn: true,
};
const { info: {staff, staffID}, userClockIn } = user;
console.log("===Staff Clockin===");
console.log(staff);
console.log(staffID);
console.log(userClockIn);
//swapping variables