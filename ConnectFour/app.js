
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
  ]

function checkWon(){
  // look to see if there are four matches in a row
  //loop over rows i then colunms j
   //columns 1 - 7
for(let j=0; j<7; j++){
    console.log(j)
      for(let i=0; i<42; i+=7){
        console.log(i+j)
      }
    }
    //rows 1 - 6
    for(let j=0; j<42; j+=7){
    console.log(j)
      for(let i=0; i<7; i++){
        console.log(i+j)
      }
    }
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
            //check if won
            checkWon();
            currentPlayer = 2;
            displayCurrentPlayer.innerHTML = currentPlayer;

        }
        else if(currentPlayer == 2){
            squares[i].classList.add('player-two');
            squares[i].classList.add('taken');
            //check if won
            checkWon();
            currentPlayer = 1;
            displayCurrentPlayer.innerHTML = currentPlayer;
        }
     } else alert("cannot go in this space");
        // displayCurrentPlayer.innerHTML = currentPlayer;
       
    }; 
    }

