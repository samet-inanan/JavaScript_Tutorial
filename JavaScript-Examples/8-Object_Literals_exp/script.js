// Object Literals Örnek

/*
! Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.            

* id : bmw116d_123
* model : 116d
* yil : 2015
* renk : white
* servis kayıtları : 
*         id : bmw116d_123_1 tarih : 30.01.2016 km : 13000      toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi : 300
               id : 3 işlem : fren hidroliği : 300
*         id : bmw116d_123_2 tarih : 10.01.2017 km : 20000 toplam ücret : 1800 
            servis detayı:
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 4 işlem : balata değişimi : 800
*/


let carInfo = [{
    id : 'bmw116d_123',
    model : 'bmw 116d',
    yil : 2015,
    renk : 'Beyaz',
    servisKayitlari : [
        {
            id : 'bmw116d_123_1',
            tarih : '30/01/2016',
            km : '13000',
            ucret : 900,
            detay : [
                {
                id : 'bmw116d_123_1_1',
                aciklama : 'yağ değişimi ücreti',
                ucret : 300
                },
                {
                id : 'bmw116d_123_1_2',
                aciklama : 'filtre değişimi ücreti',
                ucret : 300
                },
                {
                id : 'bmw116d_123_1_1',
                aciklama : 'fren hidroliği ücreti',
                ucret : 300
                }
            ]
        },
        {
            id : 'bmw116d_123_2',
            tarih : '10/01/2017',
            km : '20000',
            ucret : 1800,
            detay : [
                {
                    id : 'bmw116d_123_2_1',
                    aciklama : 'yağ değişimi ücreti',
                    ucret : 350
                },
                {
                    id : 'bmw116d_123_2_2',
                    aciklama : 'filtre değişimi ücreti',
                    ucret : 350
                },
                {
                    id : 'bmw116d_123_2_3',
                    aciklama : 'fren hidroliği ücreti',
                    ucret : 300
                },
                {
                    id : 'bmw116d_123_2_4',
                    aciklama : 'balata değişimi ücreti',
                    ucret : 800
                }
                
            ]
        }
]


}];

console.log(carInfo);
console.log(carInfo[0].id);
console.log(carInfo[0].renk);
console.log(carInfo[0].servisKayitlari[1].detay[3]);

for(let i = 0 ; i < carInfo.length; i++ ) {
    console.log(carInfo[i]);
}
for(let i = 0; i < carInfo.length; i++) {
    console.log(carInfo[i].servisKayitlari[i].detay);
}
