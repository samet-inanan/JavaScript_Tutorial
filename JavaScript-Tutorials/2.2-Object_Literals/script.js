/* OBJECT LITERALS (Nesne Değişmezleri) */

var isim = 'Samet';
var soyisim = 'İnanan';
var yas = 20;

var kisi = ['Samet','İnanan',20];

// * Bu iki tanımlama da çoklu tanımlamalarda iş görmeyecektir. İşte burada 'object literals' kavramı karşımıza çıkmaktadır.

// ! Object literals'ler comma (,)'lerle ayrılırlar.

let person = {

    firstName : 'Samet',
    lastName : 'İnanan',
    age : 20,
    hobbies : ['music', 'game', 'coding'],
    address : {
        city : 'Kocaeli',
        country : 'Türkiye'
    },
    // ! hangi nesnenin içinde 'this' ifadesi kullanılırsa o nesnenin bir referansı alınmış olur.
    getBirthYear : function() {
        return 2021 - this.age;     // return 2021 - 20;
    }
};

console.log(person);
console.log(typeof person);

console.log(person.firstName);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.city);
console.log(person.address['city']);
console.log(person.getBirthYear());


let people = [
               {firstName2 : 'Samet', lastName2 : 'İnanan'},
               {firstName2 : 'Ravza', lastName2 : 'Sağlam'},
               {firstName2 : 'Yasin', lastName2 : 'İnanan'}
             ];

console.log(people);
console.log(typeof people);

console.log(people[0]);
console.log(people[1].firstName2);

// üç obje dizisinin de elemanlarını yazdırma
for(let i = 0; i < people.length; i++) {
    console.log((people[i].firstName2) + ' ' + (people[i].lastName2));
}