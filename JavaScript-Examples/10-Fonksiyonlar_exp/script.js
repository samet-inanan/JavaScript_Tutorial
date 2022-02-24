// * FUNCTIONS ÖRNEK

var hesapA = {
    ad : 'Abdulsamet İnanan',
    hesapNo : '123456789',
    bakiye : 4000,
    ekHesap : 1000
}

var hesapB = {
    ad : 'Ramazan İnanan',
    hesapNo : '987654321',
    bakiye : 5000,
    ekHesap : 2000
}

function paraCek(hesap, miktar){
    console.log(`Merhaba ${hesap.ad}. Banka sistemimize Hoş geldiniz!`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log("Paranızı çekebilirsiniz...");
    }else {

        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam >= miktar) {
            if(confirm('Ek hesabınızı kullanmak ister misiniz?')) {
                console.log("Paranızı çekebilirsiniz...");
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekhesap - ekhesap;
            }else {
                console.log(`${hesap.hesapNo} numaralı hesabınızda ${miktar} TL bulunmamaktadır...`);
            }
        }else {
            console.log("Bakiyeniz yetersizdir...");
        }
    }

        
}
paraCek(hesapA, 4000);
paraCek(hesapA, 3000);