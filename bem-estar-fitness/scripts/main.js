const locMenu = window.document.querySelector('#menu');
const buttonMenu = window.document.querySelector('#button-menu');
const iconMenu = window.document.querySelector('.material-icons');
var statusMenu = false;

function Menu() {
    if(statusMenu == false) {
        statusMenu = true;
        iconMenu.innerHTML = 'close';
        locMenu.style.display = 'flex';
    } else {
        statusMenu = false;
        iconMenu.innerHTML = 'menu';
        locMenu.style.display = 'none';
    }
}

buttonMenu.addEventListener('mouseclick', Menu);

function LarguraDaTela() {
    var lScreen = window.innerWidth;

    if(lScreen > 749) {
        buttonMenu.style.display = 'none';
        locMenu.style.display = 'flex';
    } else {
        statusMenu = true;
        buttonMenu.style.display = 'flex';
        Menu();
    }
}

window.addEventListener('resize', LarguraDaTela);