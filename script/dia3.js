let pergunta = document.querySelector(".pergunta");
let ok = document.querySelector(".ok");
let resposta = [];
let perguntas = ["parabens você escolheu Front-End, dentro dessa especialização qual desses frameworks você vai se especializar? React = 1, Vue = 2", "parabens você escolheu Back-End, dentro dessa especialização qual desses frameworks você quer se especializar? C# = 1, Java = 2", "React, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?", "Vue, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?", "C#, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?", "Java, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?"]
let campoResposta = document.querySelector(".resposta");
let objetivos = [];
let objetivo;
let acrescentando = true;
let n = 0;
let i = 0;

ok.onclick = function () {
    armazena(n);
    acrescenta();
    desencadeiaperguntas();
}

campoResposta.onkeydown = function (e) {
    if (e.key == "Enter" && campoResposta === document.activeElement && acrescentando == true) {
        armazena(n);
        acrescenta();
        desencadeiaperguntas();
    }
};

window.onload = function () {
    campoResposta.focus();
}

function acrescenta() {
    if ((campoResposta.value == 1 || campoResposta.value == 2) && acrescentando == true) {
        n = n + 1;
        campoResposta.value = null;
    } else {
        alert("Por favor, responda com 1 ou 2");
    }
}

function armazena(n) {
    resposta[n] = document.querySelector(".resposta").value;
}

function desencadeiaperguntas() {
    for ( i = 0; i < perguntas.length; i++) {
        if (resposta[i] == 1) {
            pergunta.innerHTML = perguntas[i];
        } else if (resposta[i] == 2) {
            pergunta.innerHTML = perguntas[i+1];
        }
    }
}
/*
function pergunta2() {
    if (resposta[0] == 1) {
        pergunta.innerHTML = "parabens você escolheu Front-End, dentro dessa especialização qual desses frameworks você vai se especializar? React = 1, Vue = 2";
        pergunta3();
    } else if (resposta[0] == 2) {
        pergunta.innerHTML = "parabens você escolheu Back-End, dentro dessa especialização qual desses frameworks você quer se especializar? C# = 1, Java = 2"
        pergunta3();
    }
}

function pergunta3() {
    if (resposta[1] == 1) {
        pergunta.innerHTML = "React, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?";
        pergunta4();
    } else if (resposta[1] == 2) {
        pergunta.innerHTML = "Vue, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?"
        pergunta4();
    }
}

function pergunta4() {
    if (resposta[2] == 1) {
        pergunta.innerHTML = "C#, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?";
        pergunta5();
    } else if (resposta[2] == 2) {
        pergunta.innerHTML = "Java, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?"
        pergunta5();
    }
}

function pergunta5() {
    if (resposta[3] == 1 || resposta[3] == 2) {
        alert("parabens! idependente dessa escolha você tem muito potencial para evoluir e crescer!!!!")
        pergunta.innerHTML = "tem mais alguma tecnologia que você gostaria de aprender? 1 = ok , 2 = agora não"
    }
}
*/
if (n >= 5) {
    acrescentando = false;
    for (let i = 2; i >= 2; i++) {
        if (resposta[4] == 1) {
            pergunta.innerHTML = "Qual linguagem você gostaria de Aprender?"
        } else if (resposta[4] == 2 || resposta[4] == null) {
            alert("até agora você quer aprender: " + "\n" + objetivos + "\n" + "novas linguagems");
            i = 0;
        }
    }
}