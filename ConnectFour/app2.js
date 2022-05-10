// Store game DOM elements
const displayStatus = document.querySelector('.gameStatus')
// variables to track game status
let gameActive = true;
//store current player to set player turn
let currentPlayer = "RED";

//store game state empty text string with 42 values to track played cells and to check won

let gameState = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','1','2','3','4','5','6','7'];

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
        divs.innerText = `${i}`;
        gameboard.appendChild(divs);
    }
}
function handleSquareClick(clickedSquareEvent){
    //console.log('square clicked');
    const clickedSquare = clickedSquareEvent.target;
    const clickedSquareIndex = parseInt(clickedSquare.getAttribute('id'));
    // has the square been played? is the square underneath played? is game active? set to false if end game, then continue
    if(gameState[clickedSquareIndex] != '' || gameActive === false || gameState[clickedSquareIndex+7] === ''){
        return;
    }
    gameState[clickedSquareIndex] = currentPlayer;
    // make sure the square below is taken or none
    clickedSquare.style.backgroundColor = currentPlayer;
    //check game status which checks won or draw or changes player turn
   
    handleResultValidation();

   //checkWonByIndexOfPiece();
}

function handlePlayerChange(){
    //change current player
    currentPlayer = currentPlayer === 'RED' ? 'YELLOW' : 'RED';
    displayStatus.innerHTML = currentPlayerTurn();

}
function handleResultValidation(){
    let gameWon = false; // set to true if game won
    // loop over winningArrays and set each match see if color is same
    for(let j=0; j<winningArrays.length; j++){
       const a = gameState[winningArrays[j][0]];
       const b = gameState[winningArrays[j][1]];
       const c = gameState[winningArrays[j][2]];
       const d = gameState[winningArrays[j][3]];
        if( a === '' || b === '' || c === '' || d === ''){
            continue;
        }       
        if( a === b && b === c && c === d){
            gameWon = true;
            break;
        }
    }
    if(gameWon){
        displayStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    let gameDraw = !gameState.includes('');
    if(gameDraw){
        displayStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();    
}

function checkWonByIndexOfPiece(clickedSquareIndex){
    // get index of played piece
    // did this in handleSquareClick
    let currentPieceIndex = clickedSquareIndex;
    //representation of the board as an array of 42 strings defined as gameState, for each move we put the currentPlayer into that play's index;
    // each direction from index of piece
    directions=[ -6, // one northheast
                    1, // one east
                    7, // one north
                    8 // one southeast
    ];

    for(let i=0; i<gameState.length - 7; i++){
        
        }
    
// map that to a 2 D array
    let currentBoard = []; 
    let columns = 7
    for(let i = 0; i<gameState.length - 7; i += columns){
        currentBoard.push(gameState.slice(i,i+columns))
    }
    console.log(currentBoard);
// now check in the four directions
// check for 4 consecutive matches in the horizontal direction
}


function handleRestartGame(){
    gameActive = true;
    // clear gameState array
    gameState = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','1','2','3','4','5','6','7'];
    displayStatus.innerHTML = currentPlayerTurn();
    // set all squares background color white
    console.log(squareDivs);
    squareDivs.forEach( square =>{square.style.backgroundColor = 'white'});
}
//create the game board
createBoard();
let squareDivs = document.querySelectorAll('.gameBoard div');
// //let squareDivs = gameboard.children;
//console.log(squareDivs)
//add event listener to each square
squareDivs.forEach(square => { square.addEventListener('click', handleSquareClick) });

// add event listener to the restart button
document.querySelector('.restartGameButton').addEventListener('click', handleRestartGame);

const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ];
