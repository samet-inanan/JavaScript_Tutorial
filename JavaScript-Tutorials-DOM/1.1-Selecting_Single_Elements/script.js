// ! SELECTING ELEMENTS

// ! SELECTING SINGLE ELEMENTS

// TODO --> document.getElementById()

let val;
val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;

val = document.getElementById('header');
// val = val.id;
// val = val.className;

val.style.fontSize = '45px';
val.style.color = 'red';
val.style.textAlign = 'center';
val.style.fontWeight = 'bold';
// val.style.display = 'none';


// ? innerText - innerHTML

document.getElementById('header').innerText = 'my ToDo App';
document.getElementById('header').innerHTML = '<b>my ToDo App</b>';


console.log(val);

// TODO --> document.querySelector()

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('h1'));

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(2)').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(3)').textContent = 'task item';
document.querySelector('li:nth-child(4)').textContent = 'task item';

console.log(document.querySelector('li'));
document.querySelector('li').className = 'list-group-item list-group-item-warning';
document.querySelector('li:nth-child(2)').classList.add('active');
document.querySelector('li:nth-child(4)').classList.add('default');