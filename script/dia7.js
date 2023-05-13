let botoes = document.querySelectorAll("button");
let visor0 = document.querySelector(".visor0");
let visor1 = document.querySelector(".visor1");
let operacao = document.querySelector(".operacao");
let numeros = [];

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        if(botoes[i].innerHTML != "+" &&
           botoes[i].innerHTML != "-" &&
           botoes[i].innerHTML != "/" &&
           botoes[i].innerHTML != "*" &&
           botoes[i].innerHTML != "="){
        visor1.value = visor1.value + botoes[i].innerHTML;
        numeros[0] = Number(visor1.value);
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
            resultado();
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

function resultado(){
    visor1.value = numeros[1] + numeros[0];
    visor0.value = null;
    operacao.value = null;
}