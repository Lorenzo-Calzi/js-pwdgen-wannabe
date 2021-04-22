//Chiedere all'utente il Nome
var userName = prompt('Come ti chiami ?')


//Chiedere all'utente il Cognome
var lastName = prompt("Qual'è il tuo cognome ?")


//Chiedere all'utente il Colore Preferito 
var favColor = prompt("Qual'è il tuo colore preferito ?")


//Unire i vari risultati per creare un password
document.getElementById('greetings').innerHTML = 'Ciao '+ userName;
document.getElementById('password').innerHTML = 'La tua password è : ' + userName + lastName + favColor + '21';
