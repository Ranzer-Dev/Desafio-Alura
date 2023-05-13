let secaoSetores = document.querySelector(".listas_items");
let divSetores = secaoSetores.querySelectorAll("div");
let produto = document.querySelector(".compra_mercado");
let botao = document.querySelectorAll(".botao_compra");
let items = [];
let item;
let nomeDoItem = "";
let produtos = [];

function removeItem() {
    for(let i = 0; i < items.length; i++){
        items[i].onclick = function() {
            nomeDoItem = items[i].value;
            items[i].remove();
        }
    }
}

function apertaBotao() {
    for (let i = 0; i < botao.length; i++) {
        botao[i].onclick = function () {
            armazenaProduto();
            removeItem();
            if (botao[i].innerHTML == botao[i].innerHTML && produto.value != "") {
                item = document.createElement("input");
                item.readOnly = true;
                item.classList.add("item")
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

new MutationObserver(testeMutacao).observe(secaoSetores, {childList: true, characterData: true, subtree: true});

function testeMutacao() {
    items = document.querySelectorAll(".item");
    removeItem();
}

apertaBotao();