// ! SELECTING ELEMENTS

// ! SELECTING MULTIPLE ELEMENTS

// * class name
// TODO --> document.getElementByClassName()

// let val;
// val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];
// val = val[2];

// val[1].style.color = 'blue';
// val[2].style.backgroundColor = 'red';
// val[3].style.fontSize = '1.1em';
// val[0].textContent = 'New item';  

// for(let i=0; i<val.length; i++) {
//     console.log(val[i].style.color = 'red');
//     console.log(val[i].textContent = 'new item');
// }


// val[2].style.backgroundColor = '';
// document.querySelector('li:nth-child(4)').className = 'list-group-item list-group-item-secondary';

// console.log(val);

// TODO : document.getElementByTagName()

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list');
// val = val.getElementsByTagName('a');

// console.log(val);

// TODO : document.querySelectorAll()

// * nodelist üzerinden forEach kullan.
// val = document.querySelectorAll('li');

// val.forEach(function(item){
//     console.log(item);
// });

// val.forEach(function(item,index) {
//     item.textContent = `${index} - hello`;
//     item.style.color = 'red';
// })
// console.log(val);

val = document.querySelectorAll('li:nth-child(odd');
val.forEach(function(item) {
  item.style.background = '#CCC';  
});
document.querySelector('li:nth-child(4)').style.background = '#CCC';
document.querySelector('li:nth-child(4)').style.color = 'initial';

val2 = document.querySelectorAll('li');
val2.forEach(function(a){
   a.style.color = 'red';
   a.style.fontSize = '0.9em';
   a.style.textAlign = 'center';
});

console.log(val);
console.log(val2);