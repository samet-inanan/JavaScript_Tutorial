var num = 15.123456789;

// ** 1- Toplamda 3 basamaklı sayı kullan...
// ** 2- Ondalık kısmı 3 basamakla sınırla...
// ** 3- En yakın sayıya yuvarla...
// ** 4- Aşağıdaki sayıya yuvarla...
// ** 5- Yukarıdaki sayıya yuvarla...
// ** 6- 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul...
// ** 7- Sayı aralığını kulllanıcının belirleyeceği rastgele bir sayı üretin...
// ** 8- Bir personelin yaptığını mesai'ye göre aldığı maaşı hesaplayınız...
/* 
-- Brüt maaş : 3700 TL;
-- Brüt mesai: 10.3 TL;
* 8.1- Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
* 8.2- Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/

var num = 15.123456789;

// 1
val = num.toPrecision(3);
console.log(val);

// 2
val2 = num.toFixed(3);
console.log(val2);

// 3
val3 = Math.round(num);
console.log(val3);

// 4
val4 = Math.floor(num);
console.log(val4);

// 5
val5 = Math.ceil(num);
console.log(val5);

// 6 
val6 = Math.min(1,2,10,50,20);
val7 = Math.max(1,2,10,50,20);
console.log('Minimum sayı:', val6, '| Maksimum sayı:', val7);

// 7
var min = 10;
var max = 75;

val8 = Math.floor(min + Math.random()*(max-min));
console.log(val8);

// 8.1
var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSaati = 42;

var toplamBrutMaas = brutMaas + (mesaiSaati*mesaiUcreti);
console.log('Toplam Brüt maaş:', toplamBrutMaas.toFixed(2));

var toplamNetMaas = toplamBrutMaas - (toplamBrutMaas*0.25);
console.log('Toplam Net maaş:', toplamNetMaas.toFixed(2));


