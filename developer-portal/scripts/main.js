const ButtonMenu = window.document.querySelector('#button-menu');
const ShowMenu = window.document.querySelector('#menu');
const IconMenu = window.document.querySelector('.material-icons');
const iHeader = window.document.querySelector('#area-header');
const iMain = window.document.querySelector('#area-main');

function Navegation(GoTo) {
    const iAreaHeader = window.document.querySelector('#area-header');
    const iHomeCont = window.document.querySelector('#home-content');
    const iAbout = window.document.querySelector('#about');
    const iRegister = window.document.querySelector('#register');
    const iLogin = window.document.querySelector('#login');
    const iNotFound = window.document.querySelector('#not-found');
    const iError = window.document.querySelector('#error');

    switch(GoTo) {
        case 'Home':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'flex';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';
            break
        case 'About':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'flex';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';
            break
        case 'Register':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'none';
            iRegister.style.display = 'block';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';
            break
        case 'Login':
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'block';
            iNotFound.style.display = 'none';
            break
        case 'Not-Found':
            iAreaHeader.style.display = 'none';
            iHomeCont.style.display = 'none';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'block';
            break
        default:
            iAreaHeader.style.display = 'flex';
            iHomeCont.style.display = 'flex';
            iAbout.style.display = 'none';
            iRegister.style.display = 'none';
            iLogin.style.display = 'none';
            iNotFound.style.display = 'none';
            iError.style.display = 'none';
            iHeader.style.filter = 'blur(0px)';
            iMain.style.filter = 'blur(0px)';
            break
    }
}

function Attention() {
    iHeader.style.filter = 'blur(5px)';
    iMain.style.filter = 'blur(5px)';
}

window.addEventListener('load', Attention);