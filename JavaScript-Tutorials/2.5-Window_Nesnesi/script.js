// ! WINDOW OBJECT

let val;
var a = 10;
function abc(){
    return 0;
}

val = window;
console.log(val);

// ! alert 
// alert('Merhaba');

// ! prompt
// var b = prompt('Bir sayı giriniz : ');
// console.log(b);

// ! confirm
// val = confirm('Emin misiniz?');
// if(val) {
//     console.log('ok');
// }else {
//     console.log('no');
// }
// console.log(val);

// ! scroll
val = window.scrollX;
val2 = window.scrollY;
console.log(val,val2);

// ! location
val = window.location;
console.log(val);

val2 = window.location.href;
console.log(val2);

val3 = window.location.origin;
console.log(val3);

val4 = window.location.host;
console.log(val4);

val5 = window.location.hostname;
console.log(val5);

val6 = window.location.port;
console.log(val6);

val7 = window.location.protocol;
console.log(val7);

val8 = window.location.search;
console.log(val8);

// window.location.href = 'http://sadikturan.com';
// window.location.reload();

// ! navigator
val9 = window.navigator;
console.log(val9);

// ! document
val10 = window.document;
console.log(val10);

val11 = window.document.getElementById('header');
console.log(val11);