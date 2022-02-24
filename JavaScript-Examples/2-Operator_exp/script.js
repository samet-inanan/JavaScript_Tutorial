// 1- Can ve Ada'nın boy ve kg bilgilerini alın...
// 2- Alınan bilgilere göre kilo indekslerini hesaplayın...
// ** Formül = Kişinin kilosu / Boy uzunluğunun karesi
// 3- Hesaplanan indeks bilgilerine göre karşılaştırma yapınız...
// 4- Aşağıdaki tabloya göre kişilerin hangi gruba girdiklerini belirleyiniz...

// 0 - 18,4      -> zayıf
// 18.5 - 24.9   -> normal
// 25.0 - 29.9   -> fazla kilolu
// 30.0 - 34.9   -> şişman (obez)

// ------------------------------------------------------------

// 1
let kgCan = 60;
let kgAda = 90;

let heightCan = 1.70;
let heightAda = 1.62;

// 2
indexCan = kgCan / (heightCan * heightCan);
indexAda = kgAda / (heightAda * heightAda);

console.log(indexCan);
console.log(indexAda);

// 3
let compare = indexCan > indexAda;
let compare2 = indexAda > indexCan;
console.log(compare, compare2);
console.log("Ada'nın kilo indeksi Can'ın kilo indeksinden daha büyüktür...", compare2)
console.log("Can'ın kilo indeksi Ada'nın kilo indeksinden daha büyüktür.", compare)

// 4
let adaZayif = (indexAda >= 0) && (indexAda <= 18.4);
let adaNormal = (indexAda > 18.5) && (indexAda <= 24.9);
let adaKilolu = (indexAda > 25.0) && (indexAda <= 29.9);
let adaObez = (indexAda > 30.0) && (indexAda <= 34.9);

console.log("Ada zayıftır." , adaZayif);
console.log("Ada'nın kilosu normadir." , adaNormal);
console.log("Ada kiloludur.", adaKilolu);
console.log("Ada obezdir.", adaObez);

let canZayif = (indexCan >= 0) && (indexCan <= 18.4);
let canNormal = (indexCan > 18.5) && (indexCan <= 24.9);
let canKilolu = (indexCan > 25.0) && (indexCan <= 29.9);
let canObez = (indexCan > 30.0) && (indexCan <= 34.9);

console.log("Can zayıftır." , canZayif);
console.log("Can'ın kilosu normadir." , canNormal);
console.log("Can kiloludur.", canKilolu);
console.log("Can obezdir.", canObez);
