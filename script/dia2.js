let nome = document.querySelector(".nome");
let idade = document.querySelector(".idade");
let linguagem = document.querySelector(".linguagem");
let botao = document.querySelector(".botao")
let gosta;

function armazenaDados() {
    alert("Olá " + nome.value + ", você tem " + idade.value + " anos e já está aprendendo a linguagem " + linguagem.value + "!");

    gosta = prompt("você gosta de aprender essa linguagem? (1) 'sim' (2) 'não'")

    for (let i = 0; i < 2; i++) {

        if (gosta == 1) {
            alert("Muito bom! Continue estudando e você terá muito sucesso");
        } else if (gosta == 2) {
            alert("Ahh que pena... Já tentou aprender outra linguagen?, não desista sei que vai achar alguma que goste");
        } else if (gosta != 1 || gosta != 2) {
            alert("você deve responder com 1 ('Sim') ou 2('Não')");
        }
    }
}

document.onkeydown = function (e) {
    if (e.key == 'Enter' && nome.value != '' && idade.value != '' && linguagem.value != '') {
        armazenaDados()
    } else if (e.key == 'Enter' && (nome.value == '' || idade.value == '' || linguagem.value == '')) {
        alert("Preencha os campos");
    }
}
botao.onclick = function (e) {
    if (nome.value != '' && idade.value != '' && linguagem.value != '') {
        armazenaDados()
    } else {
        alert("Preencha os campos");
    }
}
