/* TÜR DÖNÜŞÜMÜ */

let num1 = Number('5');
let num2 = Number('10');

let total = num1 + num2;

console.log(total);
console.log(typeof num1, typeof num2);

// number to string
let val;
val = 10;
val = String(10);

console.log(val);
console.log(val.length);
console.log(typeof val);

// bool to string
let val2;
val2 = true;

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

val2 = String(true);
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

// date to string
val2 = new Date();
console.log(val2);
console.log(typeof val2);
val2 = String(new Date().getFullYear());
console.log(val2);
console.log(typeof val2);

// array to string
val3 = [1,2,3,4];
console.log(val3);
console.log(typeof val3);
console.log(val3.length);
val3 = String([1,2,3,4]);
console.log(val3);
console.log(typeof val3);
console.log(val3.length);

// toString()

val4 = (10).toString();
val5 = (false).toString();

console.log(val4,val5);
console.log(typeof val4, typeof val5);

// string to number
val6 = Number('10');
console.log(val6);
console.log(typeof val6);
console.log(val6.toFixed(3));

// bool to number
val7 = Number(true);
val8 = Number(false);
val9 = Number(null);
console.log(val7, val8, val9);
console.log(typeof val7, typeof val8);

val10 = Number('a');    // çevrilemez.
console.log(val10);     // not an number (NaN)

val11 = Number([2,3,4,5]);      // çevrilemez.
console.log(val11);


/* parseInt
   parseFloat 
*/
// number metotlarına karşılık gelen metotlardır.
val12 = '10';
val12 = parseInt('10');

console.log(val12);
console.log(typeof val12);

val13 = '20.6';
val13 = parseFloat(val13);
console.log(val13);
console.log(typeof val13);