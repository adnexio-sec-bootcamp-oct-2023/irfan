var score = 85; 

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 59) {
    console.log("Grade: F");
} else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
}
