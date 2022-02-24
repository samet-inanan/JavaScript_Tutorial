// ! SCOPEs
// yazdığımız bir değişkenin hangi kod parçası tarafından ulaşılabilir ulaşılamaz olduğuyla alakalıdır.

// ! GLOBAL SCOPEs
var name = 'Samet';
var age = 25;

function logName(){
    // fonksiyon içi değişken globale göre daha önceliklidir.
    var name = 'Ada';
    var age = 12;
    console.log('Function Scope', name, age);
    console.log(name);
}
 
logName();

// * Fonksiyonlar kendi scope'larını oluştururlar.
// * Block'lar yeni scope oluşturmazlar.
// bir fonksiyonun içinde tanımlanmış olan değişken o fonksiyona özgüdür.

console.log("________________________________");

// ?       {var} ile oluşturulan değişkenler dışarıdan kullanılabilir.
// TODO:   {let, const} ile oluşturulan değişkenler dışarıdan kullanılamaz.
// ES6 ile gelen let ve const block scope oluştururlar.

if(true){
    var model = 'Opel';
    let year = 2016;
    const color = 'white';

    console.log('Block Scope :', model , year, color);
}

console.log(model);
// console.log(color,year);


// Eğer döngü, fonksiyon vs. içerisinde {var} değişkenini kullanırsak istemeden global değişkeni değiştirmiş olabiliriz, bu da riskli bir harekettir.
// ? bundan dolayı döngü vs.lerde {let} değişkenini kullan.

console.log('');
console.log('----------');

var i = 1;

for(var i=0; i<10; i++){
    console.log('i',i);
}
console.log(i);

console.log('-----------');

var i = 1;

for(let i=0; i<10; i++){
    console.log('i',i);
}
console.log(i);