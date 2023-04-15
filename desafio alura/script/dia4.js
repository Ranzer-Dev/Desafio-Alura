const numero = Math.floor(Math.random()*10);
let adivinhacao = prompt("Qual numero estou pensando? Dica é de 1 a 10");
let chances = 3;


for(let i = 3; i > 0 ; i--){
    if(adivinhacao != null){
        if(numero === adivinhacao){
            alert("Parabens, esse era o numero que eu estava pensando")
            i = 0;
        } else {
            adivinhacao = prompt("que pena, você errou, mas você tem "+chances+" Chances boa sorte");
            chances--;
        }
    } else {
        alert("você não tem escolha");
        adivinhacao = prompt("que pena, você errou, mas você tem "+chances+" Chances boa sorte");
        i = 3;
    }      
}


if (chances === 0 && adivinhacao !== numero){
    alert("você perdeu o jogo :(, o numero certo era "+numero);
} else {
    alert("Você acertou, Cagou!!!")
}