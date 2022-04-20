// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples:
//
//rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
    switch (p1) {
        case  "scissors":
            if (p2 === "paper"){
                return "Player 1 won!";} else if (p2 === "rock" ) {
                return "Player 2 won!"
            } else {
                return "Draw!"
            }
        case  "rock":
            if (p2 === "paper"){
                return "Player 2 won!";} else if (p2 === "scissors" ) {
                return "Player 1 won!"
            } else {return "Draw!"}
        case  "paper":
            if (p2 === "scissors"){
                return "Player 2 won!";} else if (p2 === "rock" ) {
                return "Player 1 won!"
            } else {return "Draw!"}
    }};

console.log(rps('paper','paper'));
console.log(rps('scissors','rock'));
console.log(rps('scissors','paper'));