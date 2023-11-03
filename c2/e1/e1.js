//Function Declaration
//area = height x width
let length = 5;
let width = 2;

function areaDeclaration (length, width){
    return length * width;
}
areaDec = areaDeclaration (length, width)
console.log('Function Declaration area = ' + areaDec + ' ㎡');

//Function Expression
let areaExpression = function(length, width){
    return length * width;
}
areaExp = areaExpression(length, width)
console.log('Function Expression area = ' + areaExp + ' ㎡')