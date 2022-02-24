// ** 1- Şimdiki tarihin gün,ay ve yıl bilgisini yazdırınız...
// ** 2- Tarih ve saat bilgilerini içeren bir Date objesi oluşturunuz...
// ** 3- 1/1/1990 tarihinden bir gün öncesini gösteriniz...
// 31/12/1989
// ** 4- İki tarih arasındaki geçen zamanı bulunuz...
// ** 5- Her yıl Mayıs ayının 2. haftası pazar günü kutlanan 'Anneler Günü' 2023 yılında ne zaman kutlanacaktır? 
// ** 6- Yaş hesaplama nasıl yapılır, gösteriniz...


// 1
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());

// 2
var dateA = new Date('12/10/2021 17:50:10');
var dateB = new Date(2021, 11, 10, 17, 50, 10);

console.log(dateA);
console.log(dateB);

// 3
var dateC = new Date('1/1/1990');
var d = dateC.getDate();
dateC.setDate(d - 1);
console.log(dateC);

// 4
var dateD  = new Date('5/10/1993');
var dateE = new Date ('10/18/2023');
console.log(dateE.getFullYear() - dateD.getFullYear());
console.log(dateE.getMonth() - dateD.getMonth());
console.log(dateE.getDate() - dateD.getDate());

var milisecond = dateE - dateD;
var second = milisecond / 1000;
var minute = second / 60;
var hour = minute / 60;
var dt = hour / 24;
var month = dt / 30;
var year = dt / 365;

console.log('milisaniye:' , milisecond);
console.log('saniye:' , second);
console.log('dakika:' , minute);
console.log('saat:', hour);
console.log('gün:', dt);
console.log('ay:', month);
console.log('yıl:', year);

// 5
var dateOfMom = new Date();
dateOfMom.setHours(0,0,0,0);
dateOfMom.setFullYear(2023);
dateOfMom.setDate(1);
dateOfMom.setMonth(4);

console.log(dateOfMom.getDay());

while(dateOfMom.getDay() != 0)
{
    dateOfMom.setDate(dateOfMom.getDate() + 1);
}
dateOfMom.setDate(dateOfMom.getDate() + 7);
console.log(dateOfMom);


// 6
var BirthDay = new Date('6/10/2001');
birthDayYear = BirthDay.getFullYear();
var CurrentTime = Date.now();
var ageDif = CurrentTime - BirthDay.getTime();
var ageDate = new Date(ageDif);

console.log(ageDate.getFullYear()- 1970);

// diğer çözüm

var birthDay2 = new Date('6/10/2001');
birthDayYear2 = birthDay2.getFullYear();
var currentTime2 = Date.now();
var ageDif2 = currentTime2 - birthDay2.getTime();
var sc = ageDif2 / 1000;
var mn = sc / 60;
var hr = mn / 60;
var dte = hr / 24;
var yr = parseInt(dte / 365);

console.log(yr);





