var MenuOpen = false;

const ButtonMenu = window.document.querySelector('#button-menu');
const ShowMenu = window.document.querySelector('#menu');

function Menu() {
    const IconMenu = window.document.querySelector('.material-icons');

    if (MenuOpen == false) {
        MenuOpen = true;
        IconMenu.innerHTML = 'close';
        ShowMenu.style.display = 'flex';
    } else {
        MenuOpen = false;
        IconMenu.innerHTML = 'menu';
        ShowMenu.style.display = 'none';
    }
}

function WindowSize() {
    var GetWidth = window.innerWidth;

    if (GetWidth > 599) {
        ShowMenu.style.display = 'flex';
    }
}

window.addEventListener('mousemove', WindowSize);
ButtonMenu.addEventListener('click', Menu);