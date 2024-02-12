function insert(num) {
    var newNum = document.getElementById('resu').innerHTML;
    document.getElementById('resu').innerHTML = newNum+num;
}

function limpar() {
    document.getElementById('resu').innerHTML = '';
}

function voltar() {
    var resul = document.getElementById('resu').innerHTML;
    document.getElementById('resu').innerHTML = resul.substring(0, resul.length - 1);
}

function Calc() {
    var resul = document.getElementById('resu').innerHTML;

    if(resul) {
        document.getElementById('resu').innerHTML = eval(resul);
    }
}