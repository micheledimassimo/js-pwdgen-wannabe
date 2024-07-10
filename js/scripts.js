//  Nome utente//
const nome = prompt('Qual è il tuo nome?');
console.log('nome', nome);

//  Cognome utente//
const surname = prompt('Qual è il tuo cognome?');
console.log('cognome', surname);

//  Colore preferito//
const color = prompt('Qual è il tuo colore preferito?');
console.log('colore', color);

//Password generator//
const password = nome + surname + color + 130
console.log('Password Generata:', password);

document.getElementById('psw').innerHTML = password;