// ! EVENT LISTENERS
// * değişken.addEventListener('eylem', fonksiyon)

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

// btn.addEventListener('click',function(e){
//     console.log('btn clicked');

//     e.preventDefault();             // ? defaulta engel olduk.
// });

btn.addEventListener('click', function(e){
    
    let val;
    val = e;

    val = e.target;     // * hangi butona tıklandığını gösterir.
    val = e.target.id;
    val = e.target.classList;
    val = e.type;

    console.log(val);

    e.preventDefault();
});


// btn.addEventListener('click', btnClick);
// btn.addEventListener('click', btnClick2);
// btn2.addEventListener('click', btnClick);

// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }
