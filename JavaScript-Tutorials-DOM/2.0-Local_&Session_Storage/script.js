// ! LOCAL & SESSION STORAGE

// ! LOCAL STORAGE
// ? bilgileri tarayıcı kapansa bile saklar ,bilgilerin gitmesi için bilinçli olarak silinmesi gerekir.

let val;

// * SET ITEM
const firstName = localStorage.setItem('firstName', 'Samet');
const lastName = localStorage.setItem('lastName', 'İnanan');
let hobbies = ['sinema', 'araba', 'kodlama'];

// * GET ITEM
val = localStorage.getItem('firstName');
val2 = localStorage.getItem('lastName');
console.log(val, val2);

// * REMOVE ITEM
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

// * CLEAR
// localStorage.clear();

// * set array to storage
// localStorage.setItem('hobbies', hobbies); 
// TODO: string olarak yazdırdım fakat ben obje olarak yazdırmak istiyorum.
localStorage.setItem('hobbies', JSON.stringify(hobbies));

// TODO: tekrar almak istersek [parse] metodu ile tekrardan objeye çeviririz.
val = JSON.parse(localStorage.getItem('hobbies'));


console.log(localStorage);
console.log(val);


// ! SESSION STORAGE
// ? tarayıcı kapandığı anda bilgiler gider.

// const city = sessionStorage.setItem('city', 'Sakarya');
// const country = sessionStorage.setItem('country', 'Türkiye');

// console.log(sessionStorage);