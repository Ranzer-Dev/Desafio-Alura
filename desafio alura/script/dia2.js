let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual sua idade?");
let linguagem = prompt("Qual linguagem de programação você esta aprendendo?");
let gosta = prompt("Você gosta de estudar "+linguagem+" ? Responda com o 1 para 'Sim' e 2 para 'Não'.");
let preso;


alert("Olá "+ nome + ", você tem "+  idade + " anos e já está aprendendo a linguagem " + linguagem+ "!");

if(gosta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso");
    preso = 2;
} else if (gosta == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
    preso = 2;
} else {
        alert("você deve responder com 1 ('Sim') ou 2('Não')");
}