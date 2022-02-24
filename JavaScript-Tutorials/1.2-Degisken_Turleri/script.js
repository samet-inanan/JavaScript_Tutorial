/* DEĞİŞKEN TÜRLERİ */

/* PRİMİTİVE TYPES (ilkel tipler) 
--------------------------------- */

// STRING:
let firstName = "Samet";
console.log(typeof firstName);

// NUMBER:
let age = 20;
let money = 120;
console.log(typeof age);

// BOOLEAN:
let isActive = true;
console.log(typeof isActive);

// NULL
let job = null;        // boşluğu temsil eder.
console.log(typeof job);        // cevap hatalıdır, bug'lıdır.

// UNDEFINED
let car;
console.log(typeof car);


/* REFERENCE TYPES (referans tipler)- OBJECTS
------------------------------------------- */

// ARRAY 
let names = ['Ali','Samet','Can'];
console.log(typeof names);

// OBJECTS
let address = {
    city: "Sakarya",
    country: "Türkiye"
}
console.log(typeof address);

// FUNCTION
var calculateAge = function() {
    return 0;
}
console.log(typeof calculateAge);
