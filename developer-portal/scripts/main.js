var MenuOpen = false;

const ButtonMenu = window.document.querySelector('#button-menu');
const ShowMenu = window.document.querySelector('#menu');
const IconMenu = window.document.querySelector('.material-icons');

function Menu() {
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

setInterval(() => {
    var GetWidth = window.innerWidth;
    
    if (GetWidth > 599) {
        MenuOpen = false;
        IconMenu.innerHTML = 'close';
        ShowMenu.style.display = 'flex';
    } else {
        if (MenuOpen == false) {
            IconMenu.innerHTML = 'menu';
            ShowMenu.style.display = 'none';
        }
    }
}, 200);

function Navegation(GoTo) {
    const iHomeCont = window.document.querySelector('#home-content');
    const iHomeImg = window.document.querySelector('#home-img');
    const iAbout = window.document.querySelector('#about');
    const iRegister = window.document.querySelector('#register');

    switch(GoTo) {
        case 'Home':
            Menu();
            iHomeCont.style.display = 'flex';
            iHomeImg.style.display = 'flex';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            break
        case 'About':
            Menu();
            iHomeCont.style.display = 'none';
            iHomeImg.style.display = 'none';
            iAbout.style.display = 'flex';
            iRegister.style.display = 'none';
            break
        case 'Register':
                Menu();
                iHomeCont.style.display = 'none';
                iHomeImg.style.display = 'none';
                iAbout.style.display = 'none';
                iRegister.style.display = 'block';
                break
    }
}

ButtonMenu.addEventListener('click', Menu);