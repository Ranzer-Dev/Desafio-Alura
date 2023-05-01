let pergunta = document.querySelector(".pergunta");
let ok = document.querySelector(".ok");
let respostas = [];
let perguntas = [["parabens você escolheu Front-End, dentro dessa especialização qual desses frameworks você vai se especializar? React = 1, Vue = 2", "parabens você escolheu Back-End, dentro dessa especialização qual desses frameworks você quer se especializar? C# = 1, Java = 2"], ["React, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?", "Vue, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2"], ["C#, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2", "Java, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2"], ["tem mais alguma tecnologia que você gostaria de aprender? 1 = ok , 2 = agora não", "Quais seriam? (aperte 2 para sair)"]]
let campoResposta = document.querySelector(".resposta");
let entraLoop = false;
let n = 0;

function acrescentaResposta() {
    if ((campoResposta.value == 1 || campoResposta.value == 2) && entraLoop == false) {
        n = n + 1;
        campoResposta.value = null;
    } else if (n < 3) {
        alert("Por favor, responda com 1 ou 2");
    }
}

function armazenaResposta(n) {
    respostas[n] = document.querySelector(".resposta").value;
}

function desencadeiaPerguntas() {

    if (respostas[0] == 1 && entraLoop == false) {
        pergunta.innerHTML = perguntas[0][0];
    } else if (respostas[0] == 2 && entraLoop == false) {
        pergunta.innerHTML = perguntas[0][1];
    }

    if (respostas[1] == 1 && respostas[0] == 1 && entraLoop == false) {
        pergunta.innerHTML = perguntas[1][0];
    } else if (respostas[1] == 2 && respostas[0] == 1 && entraLoop == false) {
        pergunta.innerHTML = perguntas[1][1];
    }

    if (respostas[1] == 1 && respostas[0] == 2 && entraLoop == false) {
        pergunta.innerHTML = perguntas[2][0];
    } else if (respostas[1] == 2 && respostas[0] == 2 && entraLoop == false) {
        pergunta.innerHTML = perguntas[2][1];
    }

    if ((respostas[2] == 1 || respostas[2] == 2) && entraLoop == false) {
        pergunta.innerHTML = perguntas[3][0];
        alert("parabens! idependente dessa escolha você tem muito potencial para evoluir e crescer!!!!");
    }

    if (n == 3) {
        entraLoop = true;
        tecnologias();
    }
}

function tecnologias() {
    for (let i = 0; i < 1; i++) {
        if (respostas[3] == 1 || (respostas[3] != null && respostas[3] != 2)) {
            pergunta.innerHTML = perguntas[3][1];
            if(respostas[3] != 1){
            adicionaElemento();
            }
            campoResposta.value = null;
        } else if (respostas[3] == 2) {
            campoResposta.hidden = true;
            ok.hidden = true;
            pergunta.hidden = true;
            i = 1;
        }
    }
}

function adicionaElemento() {
    let input = document.createElement("input");
    let divLinguagens = document.querySelector(".divLinguagens");
    divLinguagens.insertBefore(input, null);
    input.readOnly = true;
    input.value = campoResposta.value; 
}

ok.onclick = function () {
    armazenaResposta(n);
    acrescentaResposta();
    desencadeiaPerguntas();
}

campoResposta.onkeydown = function (e) {
    if (e.key == "Enter" && campoResposta === document.activeElement) {
        armazenaResposta(n);
        acrescentaResposta();
        desencadeiaPerguntas();
    }
};

window.onload = function () {
    campoResposta.focus();
}