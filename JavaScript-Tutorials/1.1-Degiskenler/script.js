// Değişkenler

var age;
console.log(age);

age = 20;
console.log(age);

var fullname = "Samet inanan";
console.log(fullname);

fullname = "Abdulsamet İnanan";
console.log(fullname);

// Değişken tanımlama kuralları:

// Sayısal ifadeyle başlayamaz.
var yas1;
var _yas2;
var $yas3;

// Komut isimleriyle tanımlama yapılamaz.
var ad = "Samet";
var soyad = "İnanan";

var ad_soyad = "Samet İnanan";

// case sensitive (büyük küçük harf duyarlılığı)
var firstName = "Samet";
var FirstName = "samet";
console.log(firstName);
console.log(FirstName);

// var , let ,const

// var'la tanımlanan tüm değişkenler let'le tanımlanabilir.
// ayrım {scope} kavramı ile ilgilidir.

let city = "Sakarya";
console.log(city);

// const bir sabittir, tanımlandıktan sonra değişitrilemez.

const email = "abc@gmail.com";
console.log(email);

email = "def@gmail.com";
console.log(email);