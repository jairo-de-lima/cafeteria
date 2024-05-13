function mostrarInput() {
    let input = document.getElementById("Input");
    if (input.classList.contains("escondido")) {
        input.classList.remove("escondido");
    } else {
        input.classList.add("escondido");
    }
}

let totalCarrinho = 0;

function adicionarItem(nomeProduto, precoProduto, imagemProduto) {
  let novoItem = document.createElement("div");
  novoItem.classList.add("box");
  

  let imagem = document.createElement("img");
  imagem.src = imagemProduto;
  imagem.alt = nomeProduto;
  novoItem.appendChild(imagem);
  

  let infoProduto = document.createElement("h3");
  infoProduto.textContent = nomeProduto;
  novoItem.appendChild(infoProduto);

  let precoProdutoElement = document.createElement("div");
  precoProdutoElement.classList.add("price");
  precoProdutoElement.textContent = "R$ " + precoProduto + " ";
  
  let precoAntigo = document.createElement("span");
  precoAntigo.textContent = "R$ 14,99";
  precoProdutoElement.appendChild(precoAntigo);
  
  novoItem.appendChild(precoProdutoElement);

 
  let carrinho = document.getElementById("carrinho");
  carrinho.appendChild(novoItem);

  totalCarrinho += parseFloat(precoProduto);
  
  let totalElement = document.getElementById("total");
  totalElement.textContent = "Total: R$ " + totalCarrinho.toFixed(2);
}

function removerItem(event) {
    let itemRemovido = event.target.closest('.box');
    if (itemRemovido) {
      let precoItem = parseFloat(itemRemovido.querySelector('.price').textContent.replace('R$ ', ''));
      totalCarrinho -= precoItem;
      itemRemovido.remove();
      
      let totalElement = document.getElementById("total");
      totalElement.textContent = "Total: R$ " + totalCarrinho.toFixed(2);
    }
  }