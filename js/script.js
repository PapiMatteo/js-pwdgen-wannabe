// ACQUISIZIONE DEI DATI

const userName = prompt("Ciao utente! Qual'è il tuo nome?");
console.log(userName, typeof userName);

const userLastname =  prompt("Qual'è il tuo cognome?");
console.log(userLastname, typeof userLastname)

const userFavouriteColor = prompt("E il tuo colore preferito?");
console.log(userFavouriteColor, typeof userFavouriteColor)

// LOGICA DEL PROGRAMMA 

const userPassword = `La tua password generata in base alle risposte inserite è ${userName}${userLastname}${userFavouriteColor}21 `
console.log(userPassword)

// OUTPUT

document.getElementById("result").innerHTML = userPassword