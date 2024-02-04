const msgAlert = window.document.querySelector('#msg-alert');
const areaContent = window.document.querySelector('#area-content');
const areaFooter = window.document.querySelector('#area-footer');

function MsgAlert() {
    msgAlert.style.display = 'none';
    areaContent.style.filter = 'blur(0px)';
    areaFooter.style.filter = 'blur(0px)';
}