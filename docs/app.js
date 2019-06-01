var btns = document.querySelectorAll('.button');

btns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        console.log("click");
    });
});

/*
document.querySelector('#yellow').addEventListener('click', () =>{
    console.log("clicky");
});

document.querySelector('#red').addEventListener('click', () =>{
    console.log("clickr");
});

document.querySelector('#blue').addEventListener('click', () =>{
    console.log("clicbk");
});

document.querySelector('#green').addEventListener('click', () =>{
    console.log("clickg");
});
/*
document.addEventListener("click", function(){
    document.getElementById("yellow").innerHTML = "yellow";
    document.getElementById("red").innerHTML = "red";
});

*/