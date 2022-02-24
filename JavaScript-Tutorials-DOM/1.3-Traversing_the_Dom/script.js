// ! TRAVERSING the DOM (DOM üzerinde gezinme)

let val;
let list = document.querySelector('.list-group');
val = list;
val = list.childNodes;    // text'ler (textNode)'lar boşluğu temsil ediyor.
// val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

// * NodeType
// 1 dönerse -> element
// 2 dönerse -> attribute
// 3 dönerse -> text
// 8 dönerse -> yorum satırı
val = list.childNodes[0].nodeType;    // text
val = list.childNodes[1].nodeType;    // element

val = list.children;
val = list.children[0];
val = list.children[2];

val = list.children[3].textContent = 'new item';
val = list.children[2].children;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
// val = list.parentElement;
// console.log(val);
// val = list.parentElement.parentElement;
// console.log(val);

val = list;
val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;
// console.log(val);

// for(let i=0; i<list.children.length; i++){
//   console.log(list.children[i]);
// }

// textNode'larıyla beraber yazar.
// for(let i=0; i<list.childNodes.length;i++){
//   console.log(list.childNodes[i]);
// }

for(let i=0; i<list.childNodes.length;i++){

    if(list.childNodes[i].nodeType === 1){    // yani element ise
      console.log(list.childNodes[i]);
    }   
}