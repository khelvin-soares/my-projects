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

function Navegation(GoTo) {
    const iAreaHeader = window.document.querySelector('#area-header');
    const iHomeCont = window.document.querySelector('#home-content');
    const iAbout = window.document.querySelector('#about');
    const iRegister = window.document.querySelector('#register');
    const iLogin = window.document.querySelector('#login');
    const iNotFound = window.document.querySelector('#not-found');

    switch(GoTo) {
        case 'Home':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'flex';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';

            MenuOpen = true;
            Menu();
            break
        case 'About':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'flex';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';

            MenuOpen = true;
            Menu();
            break
        case 'Register':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'none';
            iRegister.style.display = 'block';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';

            MenuOpen = true;
            Menu();
            break
        case 'Login':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'block';
            iNotFound.style.display = 'none';

            MenuOpen = true;
            Menu();
            break
        case 'Not-Found':
            iAreaHeader.style.display = 'none';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'block';

            MenuOpen = true;
            Menu();
            break
        default:
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'flex';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';

            MenuOpen = true;
            Menu();
            break
    }
}

var V;
setInterval(() => {
    var GetWidth = window.innerWidth;

    if ( GetWidth > 599) {
        V=true;
        IconMenu.innerHTML = 'close';
        ShowMenu.style.display = 'flex';
    } else {
        if (V==true) {
            V=false;
            IconMenu.innerHTML = 'menu';
            ShowMenu.style.display = 'none';
        } 
    }
}, 200);

ButtonMenu.addEventListener('click', Menu);