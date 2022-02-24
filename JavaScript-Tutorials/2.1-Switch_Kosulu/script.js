// SWITCH YAPISI (koşulu)

educState = 'university';  

switch(educState) {

    case 'middle school':
        console.log('Eğitim durumunuz...: Ortaokul');
        break;

    case 'high school':
        console.log('Eğitim durumunuz...: Lise');
        break;

    case 'university':
        console.log('Eğitim durumunuz...: Üniversite');
        break;

    default:
        console.log('Lütfen eğitim durumunuzu giriniz...');
}


let day;
let day2;

// console.log(new Date().getDay()); // 1 döndürür çünkü bugün pazartesi. Pazar = 0

switch(new Date().getDay()) {

    case 0:
        day = 'Pazar';
        break;

    case 1:
        day = 'Pazartesi';
        break;

    case 2:
        day = 'Salı';
        break;
    
    case 3:
        day = 'Çarşamba';
        break;
        
    case 4:
        day = 'Perşembe';
        break;

    case 5:
        day = 'Cuma';
        break;

    case 6:
        day = 'Cumartesi';
        break;
}
console.log(`Bugün günlerden ${day}'dir...`);

switch(new Date().getDay()) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day2 = 'Hafta içi';
        break;

    case 0:
    case 6:
        day2 = 'Hafta sonu';
        break;
}
console.log(`${day} günü ${day2}'ne denk gelmektedir...`);




const ad = 'Samet';
const yas = 22;

switch(true) {

    case (yas > 0 && yas < 12):
        console.log(`${ad} is a child...`);
        break;
    
    case (yas >=13 && yas <= 19):
        console.log(`${ad} is a teenager...`);
        break;

    default:
        console.log(`${ad} is a adult...`);
        break;

}