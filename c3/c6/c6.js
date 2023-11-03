//multiline string
const song = `
    One thing I dont know why, 
    It doesnt even matter how hard you
    Keep that in mind I designed this rhyme,
    To explain in due time...`;
console.log(song);

//expressions in template literals
const a = 'Irfan';
const b = ' Muhaimin';
console.log(`Hi, My name is ${a + b}.`); 

//template literals in function
function brand(name){
    return `Hi, Do you prefer ${name}`;
}
console.log(brand("Honda"));
console.log(brand("Toyota"));

//escaping backticks
const message = `Would you like to buy the car?\ or just want to view`;
// i dont know what is going on here with the backslash
console.log(message);