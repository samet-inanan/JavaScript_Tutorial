// ! KEYBOARD EVENTS

const input = document.querySelector('#textTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');

// * KEYDOWN event
// input.addEventListener('keydown', eventHandler);

// * KEYUP event

// input.addEventListener('keyup', eventHandler);
// * KEYPRESS event

// input.addEventListener('keypress', eventHandler);
// * FOCUS
// input.addEventListener('focus', eventHandler);
// * BLUR
// input.addEventListener('blur', eventHandler);

// * CUT
// input.addEventListener('cut', eventHandler);
// * PASTE
// input.addEventListener('paste', eventHandler);

// * SUBMIT
// form.addEventListener('submit', eventHandler);

// * SELECT
// form.addEventListener('select', eventHandler);

// * CHANGE
select.addEventListener('change', eventHandler);


function eventHandler(e){
    console.log('event type : ' + e.type);
    // console.log('key code : ' + e.keyCode);
    console.log('value : ' + e.target.value);

    // e.target.style.backgroundColor = 'yellow';

    e.preventDefault();
}




const btn = document.querySelector('#btnDeleteAll');
btn.addEventListener('click', function(e){
    e.preventDefault();
})