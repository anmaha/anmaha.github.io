// Store game DOM elements
const displayStatus = document.querySelector('.gameStatus')
// variables to track game status
let gameActive = true;
//store current player to set player turn
let currentPlayer = "RED";

//store game state empty text string with 42 values to track played cells and to check won

let gameState = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

// some messages for display status put in functions so they will update with current data when needed

const winningMessage = () => `${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// set initial message to show who's turn
displayStatus.innerHTML = currentPlayerTurn();

// Functions

function createBoard(){
    // generate the gameboard divs
    gameboard = document.querySelector('.gameBoard');
    let divs;
    for( let i=0; i<42; i++){
        divs = document.createElement('div');
        divs.setAttribute('id', i)
        divs.innerText += `${i}`;
        gameboard.appendChild(divs);
    }
}

function handleSquareClick(clickedSquareEvent){

    console.log('square clicked');

    const squareClicked = clickedSquareEvent.target;

}

function handleSquarePlayed(){

}
function handlePlayerChange(){

}
function handleResultValidation(){

}

function handleRestartGame(){

}
//create the game board
createBoard();
let squareDivs = document.querySelectorAll('.gameBoard div');
// //let squareDivs = gameboard.children;
console.log(squareDivs)
//add event listener to each square
squareDivs.forEach(square => { square.addEventListener('click', handleSquareClick)
    
});



// add event listener to the restart button
document.querySelector('.restartGameButton').addEventListener('click', handleRestartGame);


