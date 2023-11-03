function repeatOperation(fn, times) {
    for (var i = 0; i < times; i++) {
        fn();
    }
}

function greet() {
    console.log("Hello");
}

repeatOperation(greet, 3); 
