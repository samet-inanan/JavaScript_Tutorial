// IF&ELSE KOŞULLARI

const firstName = 'Samet';
const age = 20;
const isStudent = true;
const school = 'university';
const school2 = 'high school';

if(firstName === 'Samet') {
    console.log('Merhaba Samet');
}

if(age === 20) {
    console.log('Yaşınız 19');
}

if(isStudent){    
    console.log('Merhaba öğrenci');
}

if(age >= 18) {

    if(school == 'university' || (school2 == 'high school')) {
        console.log('Artık reşitsiniz, ehliyet alabilirsiniz...')
    }
    else {
        console.log('Eğitim durumunuz yetersizdir...');
    }
}
else {
    console.log('Reşit değilsiniz, ehliyet alamazsınız...');
}

if(age > 0 && age < 12) {
    console.log(`${firstName} is a child`);
}
else if(age >= 13 && age <= 19) {
    console.log(`${firstName} is a teenager`);
}
else {
    console.log(`${firstName} is an adult`);
}

// undefined
let id = 'b191210102';

if(typeof id !== 'undefined') {
    console.log('id...: ' + id);
}
else {
    console.log('no id.');
}
