let setorFrutas = [];
let setorLaticinios = [];
let setorCongelados = [];
let setorDoces = [];
let pergunta = prompt("Você quer adicionar algo na lista de compras?");
let item;
let setor;
let remover;
let removerFrutas;
let removerLaticinios;
let removerCongelados;
let removerDoces;

for(let i = 0; i < 99; i ++){
if (pergunta == "s"){
        item = prompt("Qual seria o item?")
        setor = prompt("O setor desse item seria de Frutas(1), Laticinios(2), Congelados(3) ou Doces(4)?")
        switch (setor){
            case "1":
                setorFrutas.push(item);
                break;
            case "2":
                setorLaticinios.push(item);
                break;
            case "3":
                setorCongelados.push(item);
                break;
            case "4":
                setorDoces.push(item);
                break;
            default:
                alert("escolha um dos setores");
                break;
        }
        pergunta = prompt("Você quer adicionar algo na lista de compras? (s ou n) ou remover algum? (r)");
    } else if(pergunta == "r"){
        alert(setorFrutas + setorLaticinios + setorCongelados + setorDoces);
        setor = prompt("qual dos item você quer remover?");
        removerFrutas = setorFrutas.find(element => element == setor);
        removerLaticinios = setorLaticinios.find(element => element == setor);
        removerCongelados = setorCongelados.find(element => element == setor);
        removerDoces = setorDoces.find(element => element == setor);

        if(removerFrutas == setor) {
            remover = setorFrutas.indexOf(setor);
            setorFrutas.splice(remover, 1);
        } else if (removerLaticinios == setor){
            remover = removerLaticinios.indexOf(setor);
            setorLaticinios.splice(remover, 1);
        } else if (removerCongelados == setor){
            remover = removerCongelados.indexOf(setor);
            setorCongelados.splice(remover, 1);
        } else if (removerDoces == setor){
            remover = removerDoces.indexOf(setor);
            setorDoces.splice(remover, 1);
        }

        pergunta = prompt("Você quer adicionar algo na lista de compras? (s ou n) ou remover algum? (r)");

    } else if (pergunta == "n"){
        alert("lista de compras:"+"\n"+setorFrutas+"\n"+setorLaticinios+"\n"+setorCongelados+"\n"+setorDoces);
        i = 99;
    }
}