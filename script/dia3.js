let animacao;
let destinos = [];
let objetivos = [];
let x = 0;
let y = 50;
let objetivo;

destinos[0] = prompt("Qual área você deseja se desenvolver? Front-End = 1, Back-End = 2")

for(let i = 0; i < 99; i++){
    if (destinos[0] == 1) {
       destinos[1] = prompt("parabens você escolheu Front-End, dentro dessa especialização qual desses frameworks você vai se especializar? React = 1, Vue = 2 ?");
       x = 200; y = 150;
    }else if(destinos[0] == 2){
        destinos[2] = prompt("parabens você escolheu Back-End, dentro dessa especialização qual desses frameworks você quer se especializar? C# = 1, Java = 2");
    } 
    
    if(destinos[1] == 1) {
        destinos[3] = prompt("React, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?");
        escolha = 99;
    } else if (destinos[1] == 2) {
        destinos[3] = prompt("Vue, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?");
        escolha = 99;
    }

    if(destinos[2] == 1) {
        destinos[3] = prompt("C#, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?");
        escolha = 99;
    } else if (destinos[2] == 2) {
        destinos[3] = prompt("Java, Muito Bom!!, vai querer ser fullstack = 1, ou prefere ficar fera na área escolhidas = 2 ?");
        escolha = 99;
    }

    if (destinos[3] == 1 || destinos[3] == 2 ){
        alert("parabens! idependente dessa escolha você tem muito potencial para evoluir e crescer!!!!")
        i = 99;
    }

}


    for(let i = 2; i >= 2; i++ ){
         objetivo = prompt("tem mais alguma tecnologia que você gostaria de aprender? 1 = ok , 2 = agora não ");
            if(objetivo == 1){
          objetivos.push(prompt("Qual linguagem você gostaria de Aprender?"))
            } else if (objetivo == 2 || objetivo == null){
                alert("até agora você quer aprender: "+objetivos+" novas linguagems");
                i = 0;
            }
    }

