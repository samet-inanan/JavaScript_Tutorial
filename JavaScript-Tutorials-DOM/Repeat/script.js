const li = document.createElement('li');
li.className = 'list-group-item list-group-item-secondary';
li.setAttribute('title', ' new item');
li.setAttribute('data-id', '5');

const text = document.createTextNode('new item');
li.appendChild(text);

console.log(li);

console.log("---------------------------------");

const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item float-end';
a.innerHTML = '<i class = "fas fa-times"></i>';
li.appendChild(a);

console.log(li);

console.log("---------------------------------");

document.querySelector('#task-list').appendChild(li);

const div = document.createElement('div');
div.className = 'input-group mb-3';

const input = document.createElement('input');
input.className = 'form-control';
input.setAttribute('id', 'textTaskName');
input.setAttribute('name','taskName');
input.setAttribute('type','text');
input.setAttribute('placeholder', 'Type a new task');

const div2 = document.createElement('div');
div2.className = 'input-group-append';

const button = document.createElement('button');
button.className = 'btn btn-primary';
button.setAttribute('id', 'btnAddNewTask2');
button.setAttribute('type', 'button');
button.innerHTML = '<i class ="fas fa-plus"></i>';

div2.appendChild(button);
div.appendChild(input);
div.appendChild(div2);

document.querySelector('#addTaskForm').appendChild(div);

console.log("---------------------------------");

const taskList = document.querySelector('#task-list');
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);
// taskList.children[3].removeAttribute('class');

// for(let i=0; i<taskList.children.length; i++){
//     taskList.children[i].removeAttribute('class');
// }

const cardHeader = document.querySelector('.card-header');

const h2 = document.createElement('h2');
h2.setAttribute('class', 'card-header');
h2.appendChild(document.createTextNode('My List'));

const parent = document.querySelector('.card');
parent.replaceChild(h2,cardHeader);

console.log("---------------------------------");

let val;
link = taskList.children[0].children[0];
val = link.className;
val = link.classList;

link.classList.add('new');
link.classList.remove('new');

console.log(val);

// val = link.getAttribute('data-id');
// console.log(val)

// val3 = link.getAttribute('href');
// console.log(val3);

val4 = link.setAttribute('href', 'http://sadikturan.com');
console.log(val4);

val5 = link.hasAttribute('class');
console.log(val5);
val6 = link.hasAttribute('data-validation');
console.log(val6);
