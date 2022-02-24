// ** 1- "Bmw, Mercedes, Opel, Mazda" elemanlarına sahip bir dizi oluşturun.
// ** 2- Dizi kaç elemanlıdır?
// ** 3- Dizinin ilk ve son elemanlarını bulun.
// ** 4- "Renault" değerini dizinin sonuna ekleyin.
// ** 5- "Toyota" değerini dizinin başına ekleyin.
// ** 6- "Renault" değerini silin.
// ** 7- "Toyota" değerini silin.
// ** 8- Dizi elemanlarını ters çevirin.
// ** 9- Dizi elemanlarını alfabetik sıraya göre sıralayınız.
// ** 10- [1,2,5,80,15] dizisini sıralayınız.
// ** 11- "Opel" değeri dizinin bir elemanı mıdır?
// ** 12- var str = "Chevrolet, Dacia"; ifadesini diziye çeviriniz.
// ** 13- Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştiriniz.
// ** 14- Oluşturulan diziden son 2 elemanı siliniz.
// ** 15- Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
// studentA = Yiğit Bilgi 2010
// studentB = Sena Turan 1999
// studentC = Ahmet Hakan 1995
// ** 16- Birleştirilen dizi içerisinde studentA dizisine ve Yiğit, Turan, Hakan, 1995 bilgilerine ulaşınız.


// 1
let cars = ['Bmw', 'Mercedes', 'Opel', 'Mazda'];
/* let cars2 = new Array('Bmw', 'Mercedes', 'Opel', 'Mazda'); */
console.log(cars);

// 2
console.log(cars.length);

// 3
/* console.log(cars[0], cars[3]); */
console.log(cars[0], cars[cars.length - 1]);

// 4

/* 
cars[4] = "Renault";
console.log(cars);
*/
/* 
cars[cars.length] = "Renault";
console.log(cars);
*/
cars.push('Renault');
console.log(cars);

// 5
cars.unshift('Toyota');
console.log(cars);

// 6
cars.pop();
console.log(cars);

// 7
cars.shift();
console.log(cars);

// 8
cars.reverse();
console.log(cars);

// 9
cars.sort();
console.log(cars);

// 10
var numbers = [1,2,5,80,15];
function compare(a,b) {
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
console.log(numbers.sort(compare));

// 11
console.log(cars.indexOf('Opel')); // 4 numaralı indeks
console.log(cars.includes('Opel'));

// 12
var str = "Chevrolet,Dacia";
var arr = str.split(',');
console.log(arr);

// 13
var arr2 = cars.concat(arr);
console.log(arr2);

// 14
arr2.splice(4,2);
console.log(arr2);

// 15
var studentA = ['Yiğit', 'Bilgi', 2010];
var studentB = ['Sena', 'Turan', 1999];
var studentC = ['Ahmet', 'Hakan', 1995];

var students = [studentA, studentB, studentC];
console.log(students);

// 16
console.log(students[0]);
console.log(students[0][0]);
console.log(students[1][1]);
console.log(students[2][1]);
console.log(students[2][2]);