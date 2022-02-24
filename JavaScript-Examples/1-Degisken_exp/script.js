// Müşteriye ait bilgileri içeren değişkenleri oluşturun.   

var customerName = 'Samet';
var customerSurname = 'İnanan';
var fullName = 'Samet İnanan';

var idNumber = '38860959008';
var orderTotal = 205.5;
var gender = 'erkek';

// object
var address = {
    city : 'Sakarya',
    district : 'Adapazarı',
    body : 'Sakarya Üniversitesi Kampüsü'
}
// array
var hobbies = ['sinema', 'kitap', 'spor', 'kod yazmak'];


/* 
Aşağıdaki siparişlerin toplamını hesaplayınız...

var order1 = '100';
var order2 = '200';
*/ 

var order1 = Number('100');
var order2 = Number('150');

var totalOrder = order1 + order2;
console.log(totalOrder);

/* 
Aşağıdaki siparişlerin toplamını hesaplayınız...

var order3 = '100.2';
var order4 = '150.5';
*/

var order3 = Number('100.2');
var order4 = Number('150.5');

var totalOrder2 = order3 + order4;
console.log(totalOrder2);

/* 
Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız...

var order5 = '140.2';
var order6 = '250.5';
*/

var order5 = parseInt('140.2');
var order6 = parseInt('250.5');

var totalOrder3 = order5 + order6;
console.log(totalOrder3);

/*
Aşağıda verilen doğum yılına göre yaş hesaplayınız...

var yearOfBirth = 1986;
*/

const yearOfBirth = 1986;       // const daha iyi bir kullanımdır.
var currentYear = 2021;

var age = currentYear - yearOfBirth;
console.log(age);

// diğer seçenek

console.log(new Date().getFullYear() - yearOfBirth);

/* 
Aşağıdaki string ifadenin karakter sayısını bulunuz...

var course = 'Modern Javascript Kursu';
*/

var course = 'Modern Javascript Kursu';
console.log(course.length);