/* 1 chiedo il nome 
   2 lo salvo in una variabile */

const firstname = prompt('Qual\'è il tuo NOME?', 'Xhulio');

/* 3 chiedo il cognome 
   4 lo salvo in una variabile */

const lastname = prompt('Qual\'è il tuo COGNOME?', 'Dreni');

/* 5 generare un numero casuale da 0 a 100 */
let num = Math.round(Math.random() * 100);

console.log(num)

/* 6. sommiamo/uniamo queste 3 stringe
   7. salviamo in una variabile c */

const message = `la tua password e': ${firstname}${lastname}${num}`;

console.log(message);

