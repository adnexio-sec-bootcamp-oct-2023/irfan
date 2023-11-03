function exampla(){
    if (true) {
        let x = 20;
        var y = 1;
        console.log('Using let: ' + x);
        console.log('Using var: ' + y); 
    }
    //console.log('Using let: ' + x);  <-- cannot access as it is undefined
    console.log('Using var: ' + y);
}
exampla();

function examplb(){
    if (true) {
        const z = 5;
        console.log('Using const: ' + z); 
    }
    //console.log('Using const: ' + z); <-- cannot access as it is undefined
}
examplb();