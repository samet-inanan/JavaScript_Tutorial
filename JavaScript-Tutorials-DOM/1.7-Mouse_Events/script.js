// ! MOUSE EVENTS

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// * CLICK event
// btn.addEventListener('click', eventHandler);
// ul.addEventListener('click', eventHandler);

// * DOUBLE CLICK event
// btn.addEventListener('dblclick', eventHandler);

// * MOUSEDOWN event
// btn.addEventListener('mousedown', eventHandler);
// * MOUSEUP event
// btn.addEventListener('mouseup', eventHandler);

// * MOUSEENTER event
// ul.addEventListener('mouseenter', eventHandler);
// * MOUSELEAVE event
// ul.addEventListener('mouseleave', eventHandler);

// ? nesnenin alt elemenlarında da mouseover ve mouseout çalışır.
// * MOUSEOVER event
// ul.addEventListener('mouseover', eventHandler);
// * MOUSEOUT event
// ul.addEventListener('mouseout', eventHandler);

// * MOUSEMOVE event
const h5 = document.querySelector('h5');
ul.addEventListener('mousemove', eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent = `Mouse X : ${event.offsetX} 
    Mouse Y : ${event.offsetY}`;
}
