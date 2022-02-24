// STRINGS 

const firstName = 'Samet';
const lastName = "İnanan";
const fullName = 'Abdulsamet İnanan';
const text = 'Javascript heyecan verici bir dildir.';
const age = 20;
let hobbies = 'sinema, spor, kitap, yazılım'
let hobbies2 = 'yüzme, film, sanat';

// ! String CONCATINATION

let val;
val = firstName + ' ' + lastName;
val2 = 'Benim adım ' + firstName + ' ' + lastName + 've yaşım ' + age + "'dir." + 'Sakarya Üniversitesi\'nde okuyorum.';

console.log(val);
console.log(val2);
console.log(typeof val);

// ** string concat

val = firstName.concat(' ', lastName, ' ', age);
val2 = val.length;
console.log(val);
console.log(val2);

// ! String UPPERCASE- LOWERCASE

val3 = fullName.toUpperCase();  // tüm harfler büyük
console.log(val3);
val4 = fullName.toLowerCase();  // tüm harfler küçük
console.log(val4);

// ifadedeki m harfini arar ve indeks numarasını atar.
val5 = firstName.indexOf('m');  
console.log(val5);

// ! String SUBSTRING & SLICE
val6 = fullName.substring(5,10);
console.log(val6);
val7 = fullName.slice(5,17);
console.log(val7);

// ! REPLACE
console.log(text.replace('Javascript', 'PHP'));
// büyük-küçük harf duyarlılığı olmadan yapmak için REGEX (reguler expression) kullanılmalıdır.
console.log(text.replace(/JAVASCRIPT/i, 'PHP'));
// replace() metodu yalnızca ilk eşleşen karakteri değiştirir.
console.log(text.replace('e', 'E'));
// Tüm karakterleri değiştirmek için REGEX kullanılmalıdır.
console.log(text.replace(/e/g, 'E'));


// ! TRIM
val8 ='  ' + fullName.replace('Abdulsamet', 'Samet 20') + '  ';
console.log(val8);

val9 = val8.trim();
console.log(val9);

// ! SPLIT
val10 = hobbies.split(',');
console.log(val10);
val11 = hobbies2.split(' ');
console.log(val11);
