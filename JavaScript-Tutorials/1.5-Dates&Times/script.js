/* DATE OBJECT */

let d = new Date();
let e = new Date();

// SET Methods
// Get ile yazılan bilgilerin değiştirilmesini sağlar.

e.setFullYear(2023);
e.setMonth(5);
e.setDate(20);
e.setHours(10);
e.setMinutes(55);
e.setSeconds(22);



// GET Methods
console.log(d);
console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(typeof d);

console.log(e);
console.log(e.getFullYear());
console.log(e.getMonth() + 1);
console.log(e.getDate());
console.log(e.getHours());
console.log(e.getMinutes());
console.log(e.getSeconds());

console.log(typeof e);

// Şimdiki tarihten doğum tarihinizi çıkartarak yaşınızı ve yıl,ay,günler arasındaki farkları hesaplayınız.
let date = new Date();
let birthday = new Date(2001,6,10);        // yıl, ay, gün
console.log(date);
console.log(birthday);

console.log(date.getFullYear() - birthday.getFullYear());
console.log(date.getMonth() - birthday.getMonth());
console.log(date.getDate() - birthday.getDate());

console.log("______________________");
// * 10/10/2016 - 10/11/2018 arasında kaç saat fark vardır?

let date1 = new Date('10/10/2016');
let date2 = new Date('10/11/2018');

console.log(date1, date2);

var msec = date2 - date1;
var sec = msec / 1000;
var min = sec / 60;
var hour = min / 60;

console.log(hour);


