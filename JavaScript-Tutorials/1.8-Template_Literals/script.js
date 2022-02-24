/* TEMPLATE LITERALS */

const fullName = 'Samet İnanan';
const city = 'Sakarya';
const yearOfBirth = 2001;

let val;

val = 'My name is ' + fullName +
      '. I\'m ' + (2021 - yearOfBirth) + ' years old' +
      ' and I live in ' + city + '.';
console.log(val);

// ! TERNARY Operatörü: 
// ** (expression) ? true : false
val2 = `My name is ${fullName}. I'm ${2021 - yearOfBirth >= 18?'over 18':'under 18'} and I live in ${city}.`;
console.log(val2);

const name = 'Samet';
const surname = 'İnanan';
const desc = 'Samet \'İnanan\' and I am 20 years old';
console.log(desc);

const my = {name:'Samet', 
            surname:'İnanan',
            age: 20}
const desc2 = `My name is ${my.name} ${my.surname} \nage is ${my.age}.`;
console.log(desc2);

const a = 5;
const b = 7;
console.log(`sum of a and b is ${a+b}`);
console.log(`My name is ${my.name} ${my.surname}.`);

const string = `Ali say Hello!
Veli say How are you?
That speech is             awesome`;
console.log(string);




