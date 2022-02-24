var sentence = "   Template Literals or template strings is the ability Have multi-line string without any funny business.   ";
var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye özellikli bir kurs";

// ** 1- Cümle kaç karakterlidir?
// ** 2- Cümle kaç kelimeden oluşuyor?
// ** 3- Tüm cümleyi büyük harfe çevir...
// ** 4- Tüm cümleyi küçük harfe çevir...
// ** 5- Cümlenin başındaki ve sonundaki boşlukları siliniz...
// ** 6- '-' karakterini siliniz..
// ** 7- url'nin içinden str kısmını çıkartınız...
var str = 'http://';

// ** 8- url hangi protocol'u kullanmaktadır? (http, https)
// ** 9- url, '.com' ifadesini içeriyor mu?
// ** 10- url string ifadesini geçerli bir url olarak düzenleyiniz...


// 1
console.log(sentence.length);

// 2
console.log(sentence.trim().split(' '));

// 3 
console.log(sentence.toUpperCase());

// 4
console.log(sentence.toLowerCase());

// 5
console.log(sentence.trim());

// 6
console.log(sentence.replace('-',''));

// 7 
var str = 'http://'
console.log(url.substring(str.length));
console.log(url.slice(str.length));

// 8      
// ! startsWith
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// 9
// ! indexOf , includes
console.log(url.indexOf('.com'), url.includes('.com'));

// 10
console.log(url.toLowerCase()
                .replace(/ /g, '-')
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ç/g, 'c')
                .replace(/ğ/g, 'g')
                
                );
