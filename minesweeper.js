document.addEventListener('DOMContentLoaded', startGame)

//Board Code
var board = {
    cells: []
};
var rowcol = 5;

function creatGame() {
        for (let r = 0; r < rowcol; r++) {
            for (let c = 0; c < rowcol; c++) {
                board.cells.push({
                    row: r,
                    col: c,
                    isMine: !!Math.floor(Math.random() * 1.4),
                    isMarked: false,
                    hidden: true
                })
            }
        }
    }
    //How the game does the things it does
creatGame();

function startGame() {
    for (var i = 0; i < board.cells.length; i++) {
        board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
        document.addEventListener('click', checkForWin);
        document.addEventListener('contextmenut', checkForWin);
    }
    lib.initBoard()
}

//How you know someone won and music...the begining :) Will finish coding audio in js.lib
var music = document.getElementById('Mission Impossible.mp3').play();
//document.getElementById('music');

var cellinside = board.cells

function checkForWin() {
    for (let w = 0; w < cellinside.length; w++) {
        if (cellinside[w].isMine === true && cellinside[w].isMarked === false) {
            return;
        } else if (cellinside[w].isMine === false && cellinside[w].hidden === true) {
            return;
        }
    }
    //If you see this you won!
    lib.displayMessage('Mission Complete!')
}

//The numbers on the board telling you were the mines are
function countSurroundingMines(cell) {
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    var count = 0;
    for (var x = 0; x < surrounding.length; x++) {
        if (surrounding[x].isMine === true) {
            count++
        }
    }
    return count
}

//Just like starting over
function resetfunction() {
    document.getElementById('reset', location.reload())
}