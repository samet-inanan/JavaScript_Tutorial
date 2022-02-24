// ! CREATING ELEMENTS (Element oluşturma)

// * create element
const li = document.createElement('li');

// * add class
li.className = 'list-group-item list-group-item-secondary';

// * attribute
li.setAttribute('title', 'new item');
li.setAttribute('data-id', '5');

// * text node
const text = document.createTextNode('new item');
li.appendChild(text);
 
console.log(li);

console.log("______________________________________________");

const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item float-end';
a.innerHTML = '<i class ="fas fa-times"></i>';

// append a to li
li.appendChild(a);

// append li to ul
document.querySelector('#task-list').appendChild(li);

console.log(li);

console.log("______________________________________________");

const div = document.createElement('div');
div.className = 'input-group mb-3';

const input = document.createElement('input');
input.className = 'form-control';
input.setAttribute('id', 'textTaskName');
input.setAttribute('name', 'taskName');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Type a new task');

const div2 = document.createElement('div');
div2.className = 'input-group-append';

const button = document.createElement('button');
button.className = 'btn btn-primary';
button.setAttribute('id', 'btnAddNewTask2');
button.setAttribute('type', 'button');
button.innerHTML = '<i class = "fas fa-plus"></i>';

div2.appendChild(button);
div.appendChild(input);
div.appendChild(div2);

document.querySelector('#addTaskForm').appendChild(div);



console.log(div);
