var numRows = 5;

for (var i = 1; i <= numRows; i++) {
    for (var j = 1; j <= i; j++) {
        process.stdout.write(i.toString());
    }
    process.stdout.write("\n"); 
}
