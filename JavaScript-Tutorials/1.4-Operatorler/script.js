/* OPERATÖRLER */

let val;
const a = 10;
const b = 5;
let c = 0;
let d = 3;
const e = 10;
let f = 'samet';

/* ARİTMETİK Operatörler */
val = a+b;
val2 = a-b;
val3 = a*b;
val4 = a/b;
val5 = a%b;

console.log(val,val2,val3,val4,val5);

val6 = d++;
console.log(val6);
console.log(d);

val7 = --d;
console.log(val7);
console.log(d);

sonsuz = a/c;
console.log(sonsuz);


/* ATAMA Operatörleri */

val = a;
val += a;   // val = val + a;
val -= a;   // val = val - a;
val *= a;   // val = val * a;
val /= a;   // val = val / a;
val %= a;   // val = val % a;

val8 = a;
val8 += a;        // val8 = val8 + a
console.log(val8);

val9 = b;
val9 -= b;
console.log(val9);


/* KARŞILAŞTIRMA Operatörleri */

val = a == b;
val = a === b;
val = a != b;
val = a !== b;
val = a > b;
val = a < b;
val = a >= b;
val = a <= b;

val = a == b;
console.log(val);

val = a == e;
console.log(val);

val = a === e;      // hem değer hem tip kontrolü, değer & type
val2 = a === f;
console.log(val,val2);


/* MANTIKSAL Operatörler */

// && (AND) -> ve
val = (a>b) && (a>c);
console.log(val);

// || (OR) -> veya
val = (a<b) || (a>c);
console.log(val); 

// ! (NOT) -> değil
val = !(a>b);
console.log(val);