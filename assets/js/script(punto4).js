const contaier = document.querySelector('.container');
const key1 = document.querySelector('#key1');
const key2 = document.querySelector('#key2');
const key3 = document.querySelector('#key3');
const key4 = document.querySelector('#key4');
let color;

    document.addEventListener("keydown", function (event) {

        if (event.key === 'a') {
            color = "red";

        } else if (event.key === 's') {
            color = "green";

        }
        else if (event.key === 'd') {
            color = "black";

        }
    });

    key1.addEventListener("click", (event) => {
        event.target.style.backgroundColor = color;
    });

    key2.addEventListener("click", (event) => {
        event.target.style.backgroundColor = color;
    });

    key3.addEventListener("click", (event) => {
        event.target.style.backgroundColor = color;
    });

    key4.addEventListener("click", (event) => {
        event.target.style.backgroundColor = color;
    });