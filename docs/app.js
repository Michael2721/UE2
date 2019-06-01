var btns = document.querySelectorAll('.button');

btns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        console.log("click "+btn.id);
    });
});

