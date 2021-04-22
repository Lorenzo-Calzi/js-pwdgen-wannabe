//Chiedere all'utente il Nome
var userName = prompt('Come ti chiami ?')
document.getElementById('name').innerHTML = 'Nome : ' + userName;

//Chiedere all'utente il Cognome
var lastName = prompt("Qual'è il tuo cognome ?")
document.getElementById('lastname').innerHTML = 'Cognome : ' + lastName;

//Chiedere all'utente il Colore Preferito 
var favColor = prompt("Qual'è il tuo colore preferito ?")
document.getElementById('color').innerHTML = 'Colore : ' + favColor;

//Unire i vari risultati per creare un password
document.getElementById('greetings').innerHTML = 'Ciao '+ userName;
document.getElementById('password').innerHTML =  userName + lastName + favColor + '21';
