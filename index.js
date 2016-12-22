//make game board
const content = document.getElementById('game');
const boardSize = 3;

function makeBoard() {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.id = "board";

  for (let i = 0; i < boardSize;i++) {
    let row = tbody.insertRow();
    for (let j = 0; j < boardSize;j++) {
      let td = row.insertCell();
      td.classList.add('cell', 'column' + j, 'row' + i);
      td.addEventListener('click', markGameMove);
      //add identifiers for diagonals
      if (i === j) {
        td.classList.add('diagonalRight');
      }
      if (j === boardSize - i - 1) {
        td.classList.add('diagonalLeft');
      }
    }
  }
  table.appendChild(tbody);
  content.appendChild(table);
}
makeBoard();

//mark player moves and check for winner
const gameBoard = document.querySelector('#board');
const playerOne = 'X';
const playerTwo = 'O';
let currentTurn = playerOne;
let moves = 1;

function markGameMove(e) {
  if (!e.target.classList.contains('marked') && e.target.classList.contains('cell')) {
    e.target.innerHTML = currentTurn;
    e.target.classList.add('marked');
    currentTurn = currentTurn === playerOne ? playerTwo : playerOne;
    moves += 1;
    //Have to add opposite class because move was made by opponent
    if (currentTurn === 'O') {
      e.target.classList.add('X');
    } else {
      e.target.classList.add('O');
    }
    // checkForWinner(this);
  } else {
    alert('this space is taken');
  }
}

// function filterX(elem) {
//   if (elem.classList.contains('X')) {
//     return elem;
//   }
// }
//
// function filter(square, classes) {
//   if (square.classList.contains(classes)) {
//     return square;
//   }
// }


// function contains(selector, text) {
//   var elements = document.querySelectorAll(selector);
//   return [].filter.call(elements, function(element){
//     return RegExp(text).test(element.textContent);
//   });
// }

// function checkForWinner(clicked) {
//   let squares = Array.from(document.querySelectorAll('.marked'));
//   let memberOf = clicked.className.split(/\s+/);

  // if (squares.length > 4) {
  //   for (let i = 0; i < memberOf.length; i++) {
  //     let testClass = `.${memberOf[i]}`;
  //     let count = contains(testClass, currentTurn);
  //     console.log(count);
  //     if (count.length == boardSize) {
  // 			return true;
  // 		}
  //   }
  // }
  // return false;


  // let squares = Array.from(document.querySelectorAll('.marked'));
  // let xSquares = squares.filter(filterX);
  // let oSquares = squares.filter(filterO);
  // let xMoves = [];
  // let oMoves = [];

  // console.log({xSquares, oSquares});

  //start checking when first player has marked their third square
  // if (squares.length > 4) {
  //
  //   for (let i = 0; i < xSquares.length; i++) {
  //     xMoves.push(xSquares[i].parentNode.rowIndex);
  //   }
  //
  //   for (let i = 0; i < oSquares.length; i++) {
  //     oMoves.push(oSquares[i].parentNode.rowIndex);
  //   }
  // }
// }
