let squares = document.querySelectorAll(".square")
let currentPlayer = null;
let reset = document.querySelector(".reset")
let players = ['p1', 'p2']
let turn = document.querySelector('h3')
let tracker;
let playTracker = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]


currentPlayer = players[(Math.floor(Math.random() * players.length))]


turn.innerText = `Player: ${currentPlayer}`


squares.forEach((square) => {

  square.addEventListener("click", (e) => {

    if (currentPlayer == 'p1' && e.target.value != true) {


      tracker = e.srcElement.className
      markPlay(tracker, currentPlayer)
      e.target.style.backgroundColor = 'red';
      e.target.innerText = 'X';
      checkWinner(playTracker, currentPlayer)

      currentPlayer = 'p2';
      turn.innerText = `Player: ${currentPlayer}`
      e.target.value = true;



    } else if (currentPlayer == 'p2' && e.target.value != true) {

      tracker = e.srcElement.className
      markPlay(tracker, currentPlayer)
      e.target.style.backgroundColor = 'blue';
      e.target.innerText = 'O';
      checkWinner(playTracker, currentPlayer)
      currentPlayer = 'p1';
      turn.innerText = `Player: ${currentPlayer}`
      e.target.value = true;
    }


  })
})


reset.addEventListener('click', () => {
  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
    square.innerText = null
    square.value = null;

  })
  currentPlayer = players[(Math.floor(Math.random() * players.length))]
  turn.innerText = `Player: ${currentPlayer}`
  playTracker = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
})

function markPlay(tracker, currentPlayer) {

  if (tracker.includes('b0')) {
    playTracker[0][0] = currentPlayer

  } else if (tracker.includes('b1')) {
    playTracker[0][1] = currentPlayer

  } else if (tracker.includes('b2')) {
    playTracker[0][2] = currentPlayer

  } else if (tracker.includes('b3')) {
    playTracker[1][0] = currentPlayer

  } else if (tracker.includes('b4')) {
    playTracker[1][1] = currentPlayer

  } else if (tracker.includes('b5')) {
    playTracker[1][2] = currentPlayer

  } else if (tracker.includes('b6')) {
    playTracker[2][0] = currentPlayer

  } else if (tracker.includes('b7')) {
    playTracker[2][1] = currentPlayer

  } else if (tracker.includes('b8')) {
    playTracker[2][2] = currentPlayer

  }

}

function checkWinner(array, currentPlayer) {

  if (array[0][0] && array[0][1] && array[0][2] === currentPlayer) {
    setTimeout(() => alert(`${currentPlayer} Wins`), 1000)
    // } else if (array[1][0] && array[1][1] && array[1][2] === 'p1') {
    //   setTimeout(() => alert(`${currentPlayer} Wins`), 1000)
    // } else if (array[2][0] && array[2][1] && array[2][2] === currentPlayer) {
    //   setTimeout(() => alert(`${currentPlayer} Wins`), 1000)
    // } else if (array[0][0] && array[1][0] && array[2][0] === currentPlayer) {
    //   setTimeout(() => alert(`${currentPlayer} Wins`), 1000)
    // } else if (array[2][0] && array[2][1] && array[2][2] === currentPlayer) {
    //   setTimeout(() => alert(`${currentPlayer} Wins`), 1000)
  }



}


// Horizontally=> 0,1,2; 3,4,5; 6,7,8

// Vertically => 0,3,6; 1,4,7; 2,5,8

// Diagonally=>0,4,8; 2,4,6