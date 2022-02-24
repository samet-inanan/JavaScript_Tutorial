/* ARRAYS (Diziler) */

let names = ['samet', 'akif', 'hasan'];
let years = [2001,2002,1999,2004];
let mix = ['samet','akif', 1983, null, undefined, ['sinema', 'yazılım']];
let cities = ['Sakarya', 'İstanbul', 'Ankara'];

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(years.length);

console.log(mix);
console.log(mix.length);


// ! GET array item
console.log(names[0]);
console.log(years[3]);
console.log(mix[5]);

// ! SET array item
// names[3] = 'mahmut'; 
// bunun yerine aşağıdaki kullanım daha doğrudur.
names[names.length] = 'mahmut';

// ! ADD item
names.push('Faruk hocam');      // dizinin sonuna eleman ekler.
console.log(names);

years.unshift(1989);   // dizinin başına elemena ekler.
console.log(years);

// ! REMOVE item
years.pop();            // en sondaki eleman silinir.
console.log(years);

years.shift();          // en baştaki eleman silinir.
console.log(years);

console.log((mix[5]).pop());
console.log((mix[5]).shift());


console.log(cities);

cities.push('İzmir');
console.log(cities);
cities.unshift('Eskişehir');
console.log(cities);

cities.pop(),
console.log(cities);
cities.shift();
console.log(cities);

// ! SPLICE
mix.splice(2,0,'mahmut');
console.log(mix);
mix.splice(3,4,'hasan');
console.log(mix);



cities.splice(2);       // 2 indeksli dizi ve sonrasını siler.
console.log(cities);

cities.splice(0);       // dizideki tüm elemanları siler. (0. indeksten itibaren)
console.log(cities);


// dizi elemanının indeks numarasını verir.
// ! INDEXOF
let index = names.indexOf('mahmut');    
console.log(' index : ' + index);

// dizi elemanlarını ters çevirir.
// ! REVERSE
names.reverse();        
console.log(names);

// dizi elemanları arasında alfabetik sıralama yapar. (sayısal değil)
names.sort();
console.log(names);
years.sort();
console.log(years);

// dizi birleştirmede kullanılır.
// ! CONCAT
let val = years.concat(names); // years dizisinin sonuna names ekler.
console.log(val);

// istenilen durumu bulur ve {ilk} elemanı konsola atar.
// ! FIND
function over18(year) {

    let age = 2021 - year;
    return age >= 18;
}
console.log(over18(2004));
let val2 = years.find(over18);
console.log(val2);

// istenilen durumu bulur ve {tüm} elemanları konsola atar.
// ! FILTER
let val3 = years.filter(over18);
console.log(val3);
