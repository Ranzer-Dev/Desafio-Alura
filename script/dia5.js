let secaoSetores = document.querySelector(".setores");
let divSetores = secaoSetores.querySelectorAll("div");
let produto = document.querySelector(".compra_mercado");
let botao = document.querySelectorAll(".botao_compra");
let item;
let produtos = [""];

function apertaBotao() {
    for (let i = 0; i < botao.length; i++) {
        botao[i].onclick = function () {
            armazenaProduto();
            if (botao[i].innerHTML == botao[i].innerHTML && produto.value != "") {
                item = document.createElement("input");
                item.readOnly = true;
                for (let i = 0; i < produtos.length; i++) {
                    item.value = produtos[i];
                    produto.value = null;
                }
                divSetores[i].insertBefore(item, null);
            }
        }
    }
}

function armazenaProduto() {
    if(produto.value != ""){
    produtos.push(produto.value);
    } else {
        alert("escreva um produto");
    }
}

apertaBotao();
