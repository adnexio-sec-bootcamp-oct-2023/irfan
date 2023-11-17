//prompt in browser
//process.stdin in 

/*

*/

//Step 1: Discuss the objective (name, age, location)

//Step 2: Setting up
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Step 3: Structure our Data
let profile = {};

//Step 4: Gathering the User's input
    /*rl.question("What is your name?", (name) => {
        console.log("Hello " + name);

        rl.question("What is your age?", (age) => {
            console.log("You are " + age + " years old");
        
            rl.question("Where are you from?", (location) => {
                console.log("You are from " + location );
            });
        });
    });*/

    rl.question("What is your name?", (name) => {
        profile.name = name;
        rl.question("What is your age?", (age) => {
            profile.age = age;
            rl.question("Where are you from?", (location) => {
                profile.location = location;

                displayProfile();          
            });
        });
    });

    function displayProfile(){
        console.log("Hello " + profile.name);
        console.log("You are " + profile.age + " years old");
        console.log("You are from " + profile.location );
    }