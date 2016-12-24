//make game board
const content = document.getElementById('game');
const boardSize = 3;

function makeBoard() {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.id = "board";

  let counter = 0;
  for (let i = 0; i < boardSize;i++) {
    let row = tbody.insertRow();
    for (let j = 0; j < boardSize;j++) {
      let td = row.insertCell();
      td.id = (counter++);
      td.classList.add('cell');
      td.addEventListener('click', markGameMove);
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
    e.target.value = currentTurn;
    e.target.classList.add('marked');
    currentTurn = currentTurn === playerOne ? playerTwo : playerOne;
    moves += 1;
    checkForWinner(this);
  } else {
    alert('this space is taken');
  }
}

function checkForWinner(clicked) {
  let squares = Array.from(document.querySelectorAll('.marked'));
  // let markedSquares = squares.filter(filterSquares);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //wait until first player has moved three times to check
  if (squares.length > 4) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      let id_a = document.getElementById(a);
      let id_b = document.getElementById(b);
      let id_c = document.getElementById(c);

      if (id_a.value && id_a.value === id_b.value && id_a.value === id_c.value) {
        console.log('works?');
        return id_a;
      }
    }
    return null;
  }
}
//
// function filterSquares(elem) {
//   if (elem.classList.contains('X')) {
//     elem.value = 'x';
//     return elem;
//   } else if (elem.classList.contains('O')) {
//     elem.value = 'o';
//     return elem;
//   }
// }
