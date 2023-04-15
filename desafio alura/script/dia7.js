function soma(a, b) {
   let resultado = a + b;
   alert(resultado);
}

function subtaracao(a,b){
    let resultado = a - b;
}

function multiplicacao (a, b){
    let resultado = a * b;
}

function divisao (a,b){
    let resultado = a / b;
}

function sair(){
    alert("Até a proxima");
}

let continuar = true;

for(let i = 0; continuar; i++){
    
    funcao = prompt("qual operação deseja fazer? soma (+), menos(-),vezes(*) ou divisão(/) ou sair da cauculadora(s)?")

    if(continuar == true && funcao == "+" || funcao == "-" || funcao == "*" || funcao == "/" ){
        numero1 = Number(prompt("qual seria o primeiro numero?"));
        numero2 = Number(prompt("qual seria o segundo numero?"));
    }

    switch(funcao){
        case "+" :
            soma(numero1,numero2);
            break;
        case "-" :
            subtaracao(numero1,numero2);
            break;
        case "*" :
            multiplicacao(numero1,numero2);
            break;
        case "/" :
            divisao(numero1,numero2);
            break;
        case "s" :
            continuar = false;
            break;
        default: 
            alert("esclolha uma das operações");
    }
}
