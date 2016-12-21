//make game board
const content = document.getElementById('game');

function makeBoard() {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.id = "board";

  for (let i = 0; i < 3;i++) {
    let row = tbody.insertRow();
    for (let j = 0; j < 3;j++) {
      let td = row.insertCell();
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

gameBoard.addEventListener('click', markGameMove);
gameBoard.addEventListener('click', checkForWinner);

function markGameMove(e) {
  if (!e.target.classList.contains('marked')) {
    e.target.innerHTML = currentTurn;
    e.target.classList.add('marked');
    currentTurn = currentTurn === playerOne ? playerTwo : playerOne;
  } else {
    alert('this space is taken');
  }
}

function checkForWinner(e) {
  let squares = Array.from(document.querySelectorAll('.marked'));
  //start checking when first player has marked their third square
  if (squares.length > 4) {
    // console.log(e.target);
    console.log(squares);
  }
}
