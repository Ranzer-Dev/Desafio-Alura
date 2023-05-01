let secaoSetores = document.querySelector(".setores")
let divSetores = secaoSetores.querySelectorAll("div")
let produto = document.querySelectorAll(".compra_mercado")
let botao = document.querySelectorAll(".botao")
let item;
let produtos = [""];

function apertaBotao() {
    for (let i = 0; i < botao.length; i++) {
        botao[i].onclick = function () {
            armazenaProduto();
                if (botao[i].innerHTML == botao[i].innerHTML) {
                    item = document.createElement("input");
                    for(let i = 0; i < produtos.length; i++){
                        item.value = produtos[i]
                    }
                    divSetores[i].insertBefore(item, null)
                }
            }
        }
    }

function armazenaProduto() {
    for (i = 0; i < produto.length; i++) {
        if (produto[i].value != '') {
            produtos.push(produto[i].value);
            produto[i].value = null;
        }
    }
}

apertaBotao();
