// * LOOPS (DÖNGÜLER)

// ! FOR LOOP

for(let i=1; i<=10; i++) {
    
    if(i==3) {
        console.log(`${i} en sevdiğim rakamdır.`);
        continue;
    }

    else if(i==7) {
        console.log(`${i} uğurlu rakamımdır.`);
        break;
    }

    console.log(i);

}
console.log('');

// ! WHILE LOOP

let i = 0;
while(i<10) {
    console.log(i);
    i++;
}
console.log('');

// ! DO-WHILE LOOP
// 1 kere kesinlikle çalışır.

let j = 0;
do {
    console.log(j);
    j++;
} while (j<10);
console.log('----');




let toplam = 0;
for(let i=10; i>0; i--) {
    toplam+=i;
}
console.log(toplam);

let carpim = 1;
for(let i=10; i>0; i--) {
    carpim*=i;
}
console.log(carpim);


// 10 ile 1 arasındaki çift sayıların çarpımı
let sonuc = 1;
for(let i=10; i>0; i--) {
    if(i%2==0) {
        sonuc*=i;
    }
}
console.log(sonuc);

// 10 ile 1 arasındaki tek sayıların çarpımı
let sonuc2 = 1;
for(let i=10; i>0; i--) {
    if(i%2==1) {
        sonuc2*=i;
    }
}
console.log(sonuc2);
console.log('');

for(let i=0; i<3; i++) {

    for(let j=0; j<3; j++) {
        console.log(`i : ${i} , j : ${j}`);
    }
}
console.log('');

let val = '\n';
for(let i=0; i<5; i++) {

    for(let j=0; j<5; j++) {
        val += '* ';
    }
    val += '\n';
}
console.log(val);

console.log('');
console.log('');
console.log('--- Loops in Array & Objects ---');

// * LOOPS IN ARRAY & OBJECTS

let cars = ["Bmw", "Mercedes", "Audi"];
let people = [
    {firstName: 'Samet', lastName: 'İnanan'},
    {firstName: 'Ravza', lastName: 'Sağlam'},
    {firstName: 'Ahmet', lastName: 'Hakan'},
];

for(let i=0; i<cars.length; i++) {
    console.log(cars[i]);
}
console.log('');

// ! FOR-IN 

for(let i in cars) {
    console.log(`index : ${i} , value : ${cars[i]}`);
}
console.log(typeof cars);
console.log('');

// ! FOREACH

cars.forEach(function(item) {
    console.log(item);
})

console.log("-----------")

for(let i= 0 ; i < people.length ; i++) {
    console.log(people[i].firstName);
}
console.log("");
for(let i in people) {
    console.log(people[i].lastName);
}
console.log("");
people.forEach(function(item) {
    console.log(item.firstName + " " + item.lastName);
})
console.log("-----------")

// ! MAP : returns an array

let val2 = people.map(function(item){
    return item.firstName + ' ' + item.lastName;
});
console.log(val2);

console.log(" ");

let numbers = [1,5,6,8,10,11,15];

let num = numbers.map(function(n) {
    return n*n;
});
console.log(num);




