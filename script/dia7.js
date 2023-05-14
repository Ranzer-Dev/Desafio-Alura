let botoes = document.querySelectorAll("button");
let visor0 = document.querySelector(".visor0");
let visor1 = document.querySelector(".visor1");
let operacao = document.querySelector(".operacao");
let resultado;
let numeros = [];

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        if (botoes[i].innerHTML != "+" &&
            botoes[i].innerHTML != "-" &&
            botoes[i].innerHTML != "/" &&
            botoes[i].innerHTML != "*" &&
            botoes[i].innerHTML != "=" &&
            botoes[i].innerHTML != "AC") {
            if (visor1.value != resultado) {
                visor1.value = visor1.value + botoes[i].innerHTML;
            } else {
                visor1.value = null;
                visor1.value = visor1.value + botoes[i].innerHTML;
            }
            if (visor0.value == "") {
                numeros[0] = Number(visor1.value);
            } else {
                numeros[1] = Number(visor1.value);
            }
        }

        if (botoes[i].innerHTML == "AC"){
            numeros[1] = 0;
            numeros[0] = 0;
            visor0.value = null;
            visor1.value = null;
            operacao.value = null;
        }
        if (botoes[i].innerHTML == "+") {
            soma();
        }
        if (botoes[i].innerHTML == "-") {
            subtracao();
        }
        if (botoes[i].innerHTML == "/") {
            divisao();
        }
        if (botoes[i].innerHTML == "*") {
            multiplicacao();
        }
        if (botoes[i].innerHTML == "=" && operacao.value != "" && visor1.value != '' ) {
            resultadoOperacao();
        }
    }
}

function soma() {
    if (visor1.value != ""){
        visor0.value = numeros[0];
        visor1.value = null;
        operacao.value = "+";
    }else {
       alert("coloque um numero") ;
    }
}
function subtracao() {
    if (visor1.value != ""){
        visor0.value = numeros[0];
        visor1.value = null;
        operacao.value = "-";
    }else {
       alert("coloque um numero") ;
    }
}
function divisao() {
    if (visor1.value != ""){
        visor0.value = numeros[0];
        visor1.value = null;
        operacao.value = "/";
    }else {
       alert("coloque um numero") ;
    }
}
function multiplicacao() {
    if (visor1.value != ""){
        visor0.value = numeros[0];
        visor1.value = null;
        operacao.value = "*";
    }else {
       alert("coloque um numero") ;
    }
}

function resultadoOperacao() {
    if (operacao.value == "+") {
        resultado = numeros[0] + numeros[1];
    }
    if (operacao.value == "-") {
        resultado = numeros[0] - numeros[1];
    }
    if (operacao.value == "*") {
        resultado = numeros[0] * numeros[1];
    }
    if (operacao.value == "/") {
        resultado = numeros[0] / numeros[1];
    }
    visor1.value = resultado
    numeros[0] = resultado;
    visor0.value = null;
}