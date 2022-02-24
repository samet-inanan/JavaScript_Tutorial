// ! REMOVING & CHANGING NODES (Elementleri silme ve güncelleme)

const taskList = document.querySelector('#task-list');

// * removing element
// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();

// ? removeChild
// taskList.removeChild(taskList.children[3]);

// * removing attribute
// taskList.children[3].removeAttribute('class');

// for(let i=0; i<taskList.children.length; i++){
//     taskList.children[i].removeAttribute('class');
// }

console.log(taskList);
console.log("____________________________________________________");

// !
// * replacing element
const cardHeader = document.querySelector('.card-header');

// create element
const h2 = document.createElement('h2');
h2.setAttribute('class', 'card-header');
h2.appendChild(document.createTextNode('My List'));

const parent = document.querySelector('.card');
parent.replaceChild(h2,cardHeader );

console.log(cardHeader);
console.log("____________________________________________________");
 
// !
// * classes

// let val;
// link = taskList.children[0].children[0];

// val = link.className;
// val = link.classList; 

// link.classList.add('new');
// link.classList.remove('new');
// console.log(val);
// console.log("____________________________________________________");


// * attributes
// val = link.getAttribute('data-id');
// console.log(val);
// val2 = link.getAttribute('href');
// console.log(val2);
// val3 = link.setAttribute('href', 'http://sadikturan.com');

// // attribute var mı yok mu
// val4 = link.hasAttribute('class');      
// console.log(val4);
// val5 = link.hasAttribute('data-val');
// console.log(val5);
