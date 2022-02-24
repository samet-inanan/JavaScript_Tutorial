/* 
* 1- 20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir. Bu bilgilere göre servis uyarısını veriniz...

* 1. bakım : 1 yıl,
* 2. bakım : 2 yıl,
* 3. bakım : 3 yıl,

! 2- begin -> who's there?  -> cancel  -> Canceled.
!                           -> other   -> I don't know you.
!                           -> "admin" -> Password? -> cancel      -> Canceled.
!                                                   -> other       -> Wrong password
!                                                   -> "TheMaster" -> Welcome!
*/  

// 1

var trafigeCikis = new Date('04/20/2017');
trafigeCikis.setHours(0,0,0,0);             // saati sıfırladık, gün sayısını baz alacağız.
// trafikteki süre = şimdiki zaman - trafiğe çıkış tarihi
var trafiktekiSureMs = Date.now() - trafigeCikis.getTime();
var trafiktekiSureDay = Math.floor(trafiktekiSureMs / (1000*60*60*24));


console.log(trafiktekiSureMs);
console.log(`Aracın trafikteki gün sayısı...: ${trafiktekiSureDay}`);

if(trafiktekiSureDay <= 365) {
    console.log('Aracınızın bakım işlemine ihtiyacı yoktur...');
}
else if(trafiktekiSureDay > 365 && trafiktekiSureDay <= 730) {
    console.log('Aracınızın 1 yıllık bakım zamanı gelmiştir...');
}
else if(trafiktekiSureDay > 730 && trafiktekiSureDay <= 1095) {
    console.log('Aracınızın 2 yıllık bakım zamanı gelmiştir...');
}
else if(trafiktekiSureDay > 1095 && trafiktekiSureDay <= 1460) {
    console.log('Aracınızın 3 yıllık bakım zamanı gelmiştir...');
}
else {
    console.log('Aracınızın bakım süresi 3 yılı aşmıştır, lütfen bakımınızı yaptırınız...');
}


// 2
var result = prompt(`Who's there?`);

if(result == 'cancel') {
    console.log('Canceled.');
}
else if(result == 'admin') {

    var password = prompt('Please enter your password : ');

    if(password == 'cancel') {
        console.log('Canceled.');
    }
    else if(password == 'TheMaster') {
        console.log('WELCOME ADMIN...');
    }
    else {
        console.log('Wrong password');
    }
}
else {
    console.log('I don\'t\ know you');
}

