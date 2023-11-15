const scores = [
    { name: 'Abu', score: 75 },
    { name: 'Ali', score: 45 },
    { name: 'Ahmad', score: 60 },
    { name: 'Aminah', score: 80 },
];

// Increase each score by 10%
const increasedScores = scores.map((student) => ({
    name: student.name,
    score: student.score * 1.1,
}));
  
// Select scores above 50
const highScores = increasedScores.filter((student) => student.score > 50);
  
// Get the total of all scores
const totalScore = increasedScores.reduce((total, student) => total + student.score, 0);

console.log('Original Scores:', scores);
console.log('Increased Scores:', increasedScores);
console.log('High Scores:', highScores);
console.log('Total Score:', totalScore);
  