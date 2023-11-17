const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const board = [
    [1, 2, 0, 0],
    [3, 4, 0, 0],
    [0, 0, 1, 2],
    [0, 0, 3, 4]
];

console.log(board);
for(let row of board){
    for(let cell of row){
    console.log(cell);
    }
}

function cloneBoard(b){
    let newBoard = [];

    for(let i = 0; i < b.length; i++){
        newBoard[i] = b[i].slice();
    }
    return newBoard; //pass out the value of the duplicated board instead of the original board
}

function displayBoard(b){
    for(let row of board){
        console.log(row.join(" | "));
    }
}

function checkWin(){
    for(let row of board){
        for(let cell of row){
            if (cell === 0) return false; //
        }
    }
    return true;
}

function getuserInput(){
    if (checkWin(board)){
        console.log("Congratulations, you solve the Sudoku!");
        rl.close();
        return;
    }
    rl.question('Enter row, column, and value (R, C, V):', (answer) =>{
        const part = answer.split('');
        const r = parseInt(part[0])
        const c = parseInt(part[1])
        const v = parseInt(part[2])
        
        if(initialBoard[r][c]!==0){
            console.log("This cell is pre-filled. Choose another cell")
            getuserInput();
            return;
        }
        board[r][c] = v;
        displayBoard(board);
    });
}

displayBoard(board);
getuserInput();