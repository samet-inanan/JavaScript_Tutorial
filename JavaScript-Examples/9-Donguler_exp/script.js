/* 
! Demo Loops : Sayı Tahmin Oyunu

 * 1-20 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
 ? puanlama yapın
 ? kullanıcı kaç kerede bileceğini belirtebilsin 

 oyunu 2 şekilde yapınız...
 TODO: 1-) kullanıcının sabit baş puanı 100 olsun ve kullanıcı her bilemediğinde 10 puan eksilsin.
 TODO: 2-) kullanıcının başta sabit 5 hakkı olsun. Hakkına göre tahminler yürütülsün
*/


// ! OYUN 1 

var sayac = 0;
var hak, can;

var sayi = Math.floor((Math.random()*20) + 1);
console.log(sayi); 
var can = Number(prompt("Kaç kerede bileceksiniz?"));
hak = can;

while(hak > 0) {

    sayac++;
    hak--;

    tahmin = Number(prompt("Lütfen sayıyı tahmin etmeye çalışınız..."));
    console.log("Tahmininiz :", tahmin);

    if(sayi == tahmin) {
        console.log(`Tebrikler, ${sayac}. defada bildiniz...`);
        console.log(`Puanınız : ${100 - (20)*(sayac-1)}`);
        break; 
    }
    else if(sayi > tahmin) {
        console.log("Yukarı");
    }
    else {
        console.log("Aşağı");
    }

    if(hak == 0 ) {
        console.log("Hakkınız bitti. Oyunu kaybettiniz...");
    }
}
