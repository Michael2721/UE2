var btns = document.querySelectorAll('#buttons button');
var startbtn = document.querySelector('#start');


btns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        console.log("click "+btn.id);
        flashitem(btn);
    });
});



startbtn.addEventListener('click', () => {
    console.log("click "+startbtn.id);
});

//btn animation
function flashitem(item) {
    item.classList.add('flash');
    setTimeout(function () {
        item.classList.remove('flash');
    }, 150);
}