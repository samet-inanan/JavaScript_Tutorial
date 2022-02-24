// ! FUNCTIONS

function yasHesapla(dogumYili) {
    return 2021 - dogumYili;
}

let ageSamet = yasHesapla(2001);
let ageRamazan = yasHesapla(1971);
let ageSaliha = yasHesapla(1970);

console.log(`Samet'in yaşı : ${ageSamet}`);
console.log(`Ramazan'ın yaşı : ${ageRamazan}`);
console.log(`Saliha'nın yaşı : ${ageSaliha}`);

console.log("_________________________");

function EmekliligeKacYilKaldı(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik > 0){
        console.log(`${isim} emekliliğine ${emeklilik} yıl kaldı...`);
    }
    else {
        console.log(`Zaten emekli olmuşsunuz...`);
    }
}
EmekliligeKacYilKaldı(2001, 'Samet');
EmekliligeKacYilKaldı(1971, 'Ramazan');
EmekliligeKacYilKaldı(1970, 'Saliha');
console.log("");
console.log("__________________________");
console.log(""); 

// ! FUNCTION DECLARATIONS (bildirisi)

function sum(a,b){
    var c = a+b;
    return c;
}
console.log(sum(20,10));

// ! FUNCTION EXPRESSIONS

const sum2 = function(a,b) {
    var c = a+b;
    return c;
}
console.log(sum2(20,50));       // 70
console.log(sum2(10));          // Not a Number (NaN)
console.log(sum2(35,10,50));    // 45     (fazla parametre gözardı edilir)

console.log("---")

const sum3 = function(a,b) {
    var c = a+b;
    return c;

    if(typeof a === 'undefined') {
        a = 0;
    }
    if(typeof b === 'undefined') {
        b = 0;
    }
}
console.log(15);

// ? ES6 DEFAULT PARAMETERS

function sum4(a=0,b=0) {
    var c = a+b;
    return c;
}
console.log(20);

console.log("---");

function args(){
    console.log(arguments);
}
args(10,20,30);

console.log("---");

function sumAll(){
    var total = 0;
    for(let i=0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(10,20,30,40));