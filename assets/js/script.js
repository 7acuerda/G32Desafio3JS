const elem = document.getElementById('ele1');

function pintar(elemento, color = 'green') {
  elem.style.backgroundColor = color;
}

elem.addEventListener('click', (e) => {
  pintar(e.target, 'yellow');
});