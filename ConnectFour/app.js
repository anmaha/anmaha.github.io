
//document.addEventListener('DOMContentLoaded', ()=>{

// Wireframe
// Create the board 7x7
    //function createBoard()
// 2 players red and yellow
    //alternate players
// for each move
    // space is taken?   taken is given to the hidden row, 42-48 and to each space taken by each player.  You can only go in each space if the one below is taken but not in the space if the space is taken
        // start stacking at the bottom
        // can only go if the space below is taken

    //check won
    // if won display who won
        //Function won()
    // highligt won row
// reset play again
    //Function playAgain()
function checkWon(){

}

function createBoard(){
    // generate the gameboard divs
    gameboard = document.querySelector('.gameBoard');
    let divs;
    for( let i=0; i<49; i++){
        divs = document.createElement('div');
        divs.setAttribute('id', i)
        divs.innerText += `${i}`;
        if (i==42 || i==43 || i==44 || i==45 || i==46 || i==47 || i==48){
            divs.setAttribute('class', 'taken' );
            divs.style.visibility = 'hidden';
         }
        gameboard.appendChild(divs);     
        console.log(divs);
    }
}

function checkWon(){


};

function playAgain(){
    
};

createBoard();
//let squares = document.querySelectorAll('.gameBoard div');
let squares = gameboard.children;
//console.log(squares);


let displayCurrentPlayer = document.querySelector('#currentPlayer');
let currentPlayer = 1;
displayCurrentPlayer.innerHTML = currentPlayer;

for(let i=0; i<squares.length - 7; i++){
  // console.log(squares[i])
  // squares[i].classList.add('player-one');
    squares[i].onclick = () => {
       // console.log(squares[i])

        //console.log(squares[i+7])
    if(squares[i+7].classList.contains('taken') && !squares[i].classList.contains('taken')){
         if(currentPlayer == 1){
            squares[i].classList.add('player-one');
            squares[i].classList.add('taken');
            currentPlayer = 2;
            displayCurrentPlayer.innerHTML = currentPlayer;
        }
        else if(currentPlayer == 2){
            squares[i].classList.add('player-two');
            squares[i].classList.add('taken');
            currentPlayer = 1;
            displayCurrentPlayer.innerHTML = currentPlayer;
        }
     } else alert("cannot go in this space");
        // displayCurrentPlayer.innerHTML = currentPlayer;
       
    }; checkWon()
    }

