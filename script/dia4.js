const numero = Math.floor(Math.random() * 10);
let chances = 2;
let botoes = document.querySelectorAll(".botao");
let campoTextoJogo = document.querySelector(".texto_jogo");
let tentativas = '';
let apertouBotao = '';


function verificaBotaoApertado() {
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function () {
            if (chances >= 0) {
                apertouBotao = botoes[i].textContent;
                botoes[i] = botoes[i].hidden = true;
                testaNumero();
                mudaTexto();
                chances--;
            }
        }
    }
}

function mudaTexto() {
    tentativas = campoTextoJogo.innerHTML[9];
    campoTextoJogo.innerHTML = campoTextoJogo.innerHTML.replace(tentativas, chances);
}

function testaNumero() {
    if (apertouBotao == numero) {
        alert("você acertou Parabens");
        chances = 0;
    }
}

verificaBotaoApertado();