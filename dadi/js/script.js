// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generate random number for user
const userNumber = Math.floor((Math.random() * 6) + 1);
console.log("user number", userNumber);

// generate random number for pc
const pcNumber = Math.floor((Math.random() * 6) + 1);
console.log("pc number", pcNumber);

// calcolo numero più alto
let winner;
if (userNumber > pcNumber) {
    winner = "you have win";
} else if (userNumber < pcNumber) {
    winner = "pc have win";
} else {
    winner = "you have tie with pc"
}
console.log(winner);

// output

document.getElementById("winner").innerHTML = winner;