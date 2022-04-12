// DATI IN POSSESSO

const userMail = ["luca.rossi@gmail.com", "paolo.bianchi@hotmail.com", "carmelo.luchini@libero.it", "paolo.verdi@gmail.com"];
console.log(userMail);

// Chiedere all'utente la mail

const inYourMail = prompt("inserisci la tua mail")
console.log('la mail utente è', inYourMail);

// verificare che mail sia nella lista

for (let i = 0; i < userMail.length; i++) {
    const mailInsert = userMail[i];
    if (mailInsert === inYourMail) {
       console.log("La tua mail è registrata, vuoi procedere?"); 
    } else {
        console.log("La tua mail non è registrata, torna quando avrai effettuato lo step precedente");
    }
}
