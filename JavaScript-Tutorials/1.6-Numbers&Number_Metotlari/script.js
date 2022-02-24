// NUMBERS

let val;
// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a');

val = isNaN('a10');
val2 = isNaN('10');
console.log(val, val2);
console.log(typeof val);

var num = 10.4043497;
val3 = num.toPrecision(5);
val4 = num.toFixed(5);
console.log(val3);
console.log(val4);

// MATH Fonksiyonu

val5 = Math.PI;
console.log(val5);

val6 = Math.round(2.4);     // en yakın sayıya yuvarlar.
console.log(val6);
val7 = Math.round(2.6);
console.log(val7);

val8 = Math.ceil(4.4);      // bir üst sayıya yuvarlar. (tavan)
val9 = Math.ceil(4.7),
console.log(val8, val9);

val10 = Math.floor(6.3);    // bir alt sayıya yuvarlar. (taban)
val11 = Math.floor(6.9);
console.log(val10, val11);

val12 = Math.sqrt(64);      // sayının karekökünü alır.
console.log(val12);

val13 = Math.pow(3,4);      // sayının üssünü hesaplar.
console.log(val13);

val14 = Math.abs(-100);    // sayının pozitifini (mutlağını) verir.
console.log(val14);

val15 = Math.min(1,2,3,4,5);     // sayının minimumu
console.log(val15);
val16 = Math.max(1,2,3,4,5);     // sayının maximumu
console.log(val16);

val17 = Math.random();           // 0-1 arası random sayı (kesirli)
console.log(val17);                     
val18 = Math.floor(Math.random()*10);    // 0-9 arası random sayı
console.log(val18);
val19 = Math.floor(Math.random()*100 + 1); // 0-100 arası rnd sayı 
console.log(val19);                               
