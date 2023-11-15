let globalVariable = 10;

function updateGlobalVariable(value) {
    globalVariable += value;
}

console.log('Before Update:', globalVariable); // Output: Before Update: 10
updateGlobalVariable(5);
console.log('After Update:', globalVariable); // Output: After Update: 15

//Refactored pure function
function calculateNewValue(originalValue, updateValue) {
    return originalValue + updateValue;
}
  
let reglobalVariable = 10;
  
console.log('Before Update:', reglobalVariable); // Output: Before Update: 10
const updatedValue = calculateNewValue(reglobalVariable, 5);
console.log('After Update:', updatedValue); // Output: After Update: 15
  