/*
let setorFrutas = [];
let setorLaticinios = [];
let setorCongelados = [];
let setorDoces = [];
let pergunta = prompt("Você quer adicionar algo na lista de compras?");
let item;
let setor;

for (let i = 0; i < 99; i++) {
    if (pergunta == "sim") {
        item = prompt("Qual seria o item?")
        setor = prompt("O setor desse item seria de Frutas(1), Laticinios(2), Congelados(3) ou Doces(4)?")
        switch (setor) {
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
        pergunta = prompt("Você quer adicionar algo na lista de compras?");
    } else if (pergunta == "nao") {
        alert("lista de compras:" + "\n" + setorFrutas + "\n" + setorLaticinios + "\n" + setorCongelados + "\n" + setorDoces);
        i = 99;
    }
}
*/

