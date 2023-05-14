let botoes = document.querySelectorAll("button");
let visor0 = document.querySelector(".visor0");
let visor1 = document.querySelector(".visor1");
let operacao = document.querySelector(".operacao");
let resultado;
let numeros = [];

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        if(botoes[i].innerHTML != "+" &&
           botoes[i].innerHTML != "-" &&
           botoes[i].innerHTML != "/" &&
           botoes[i].innerHTML != "*" &&
           botoes[i].innerHTML != "="){
            if(visor1.value != resultado){
                visor1.value = visor1.value + botoes[i].innerHTML;
            } else {
                visor1.value = null; 
                visor1.value = visor1.value + botoes[i].innerHTML;
            }
        if(visor0.value == ""){
            numeros[0] = Number(visor1.value);
        } else {
            numeros[1] = Number(visor1.value);
        }
        
    }
        if(botoes[i].innerHTML == "+"){
            soma();
        }
        if(botoes[i].innerHTML == "-"){
            subtracao();
        }
        if(botoes[i].innerHTML == "/"){
            divisao();
        }
        if(botoes[i].innerHTML == "*"){
            multiplicacao();
        }
        if(botoes[i].innerHTML == "=" ){
            resultadoOperacao();
        }
    }
}

function soma(){
    visor0.value = numeros[0];
    visor1.value = null;
    operacao.value = "+";
}
function subtracao(){
    visor0.value = numeros[0];
    visor1.value = null;
    operacao.value = "-"
}
function divisao(){
    visor0.value = numeros[0];
    visor1.value = null;
    operacao.value = "/"
}
function multiplicacao(){
    visor0.value = numeros[0];
    visor1.value = null;
    operacao.value = "*"
}

function resultadoOperacao(){
    if(operacao.value == "+"){
        resultado = numeros[0] + numeros[1];
    }
    if(operacao.value == "-"){
        resultado = numeros[0] - numeros[1];
    }
    if(operacao.value == "*"){
        resultado = numeros[0] * numeros[1];
    }
    if(operacao.value == "/"){
        resultado = numeros[0] / numeros[1];
    }
    visor1.value = resultado
    numeros[0] = resultado;
    visor0.value = null;
}