let squares = document.querySelectorAll(".square")
let currentPlayer = null;
let reset = document.querySelector(".reset")
let players = ['p1', 'p2']
let turn = document.querySelector('h3')

currentPlayer = players[(Math.floor(Math.random()* players.length))]

console.log(currentPlayer)

turn.innerText = `Player: ${currentPlayer}`


squares.forEach((square) => {
  
  
  square.addEventListener("click", (e) => {
    

    console.log(e.target.value)
    if (currentPlayer == 'p1' && e.target.value != true) {
      e.target.style.backgroundColor = 'red';
      currentPlayer = 'p2';
      turn.innerText = `Player: ${currentPlayer}`
      e.target.value = true;

    } else if (currentPlayer == 'p2' && e.target.value != true) {
      e.target.style.backgroundColor = 'blue';
      currentPlayer = 'p1';
      turn.innerText = `Player: ${currentPlayer}`
      e.target.value = true;
    }


  })
})



reset.addEventListener('click', () => {
    squares.forEach((square) => {
      square.style.backgroundColor = 'white';
      square.value = undefined;
      
    })
  currentPlayer = players[(Math.floor(Math.random() * players.length))]
  turn.innerText = `Player: ${currentPlayer}`

})

