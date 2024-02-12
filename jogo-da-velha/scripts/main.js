var vez = 1;
var cont = 0;
var acabou = 0;
var areaBloqueada = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var areaBlocked = document.querySelector('#bloqueado');
var resultado = document.querySelector('#container');
var vencedor = document.querySelector('#vencedor');
var vezplayer = document.querySelector('#vezplayer');

function fimParida() {
    cont = cont + 1;

    if(areaBloqueada[1] == 1 && areaBloqueada[2] == 1 && areaBloqueada[3] == 1 || areaBloqueada[4] == 1 && areaBloqueada[5] == 1 && areaBloqueada[6] == 1 || areaBloqueada[7] == 1 && areaBloqueada[8] == 1 && areaBloqueada[9] == 1 || areaBloqueada[1] == 1 && areaBloqueada[4] == 1 && areaBloqueada[7] == 1 || areaBloqueada[2] == 1 && areaBloqueada[5] == 1 && areaBloqueada[8] == 1 || areaBloqueada[3] == 1 && areaBloqueada[6] == 1 && areaBloqueada[9] == 1 || areaBloqueada[1] == 1 && areaBloqueada[5] == 1 && areaBloqueada[9] == 1 || areaBloqueada[3] == 1 && areaBloqueada[5] == 1 && areaBloqueada[7] == 1) {
        resultado.style.display = 'flex';
        vencedor.innerHTML = 'Player 1 Venceu!';
        console.log("Fim da Partida!");
        acabou = 1;
        return 1;
    } else if(areaBloqueada[1] == 2 && areaBloqueada[2] == 2 && areaBloqueada[3] == 2 ||  areaBloqueada[4] == 2 && areaBloqueada[5] == 2 && areaBloqueada[6] == 2 || areaBloqueada[7] == 2 && areaBloqueada[8] == 2 && areaBloqueada[9] == 2 || areaBloqueada[1] == 2 && areaBloqueada[4] == 2 && areaBloqueada[7] == 2 || areaBloqueada[2] == 2 && areaBloqueada[5] == 2 && areaBloqueada[8] == 2 || areaBloqueada[3] == 2 && areaBloqueada[6] == 2 && areaBloqueada[9] == 2 || areaBloqueada[1] == 2 && areaBloqueada[5] == 2 && areaBloqueada[9] == 2 || areaBloqueada[3] == 2 && areaBloqueada[5] == 2 && areaBloqueada[7] == 2) {
        resultado.style.display = 'flex';
        vencedor.innerHTML = 'Player 2 Venceu!';
        acabou = 1;
        return 1;
    }

    if(cont >= 9) {
        resultado.style.display = 'flex';
        vencedor.innerHTML = 'Empate!';
        console.log("Fim da Partida!");
        acabou = 1;
        return 1;
    }
}

function Jogar(areaJogada=0) {
    vezPlayer();
    if(acabou == 1) return 1;

    switch(areaJogada) {
        case 1:
            var area = document.querySelector('#area-1');
            if(areaBloqueada[1] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[1] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[1] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 2:
            var area = document.querySelector('#area-2');
            if(areaBloqueada[2] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[2] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[2] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 3:
            var area = document.querySelector('#area-3');
            if(areaBloqueada[3] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[3] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[3] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 4:
            var area = document.querySelector('#area-4');
            if(areaBloqueada[4] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[4] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[4] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 5:
            var area = document.querySelector('#area-5');
            if(areaBloqueada[5] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[5] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[5] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 6:
            var area = document.querySelector('#area-6');
            if(areaBloqueada[6] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[6] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[6] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 7:
            var area = document.querySelector('#area-7');
            if(areaBloqueada[7] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[7] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[7] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 8:
            var area = document.querySelector('#area-8');
            if(areaBloqueada[8] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[8] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[8] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
        case 9:
            var area = document.querySelector('#area-9');
            if(areaBloqueada[9] == 0) {
                if(vez == 1) {
                    vez = 2;
                    areaBloqueada[9] = 1;
                    area.setAttribute('class', 'porX');
                } else {
                    vez = 1;
                    areaBloqueada[9] = 2;
                    area.setAttribute('class', 'porO');
                }
                fimParida();
            } else {
                areaBlocked.style.display = 'block';
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
                setTimeout(function() {
                    areaBlocked.style.display = 'none';
                }, 3500);
            }
            break
    }
}

function refresh() {
    location.reload();
}

function vezPlayer() {
    if(vez == 1) {
        vezplayer.innerHTML = 'Player 1';
    } else {
        vezplayer.innerHTML = 'Player 2';
    }
}