const baseUrl = 'http://localhost:3000/produtos';

async function acheTodosProdutos() {
  const response = await fetch(`${baseUrl}/todos-produtos`);

  const produtos = await response.json();

  produtos.forEach((produto) => {
    document.querySelector('#produtoList').insertAdjacentHTML(
      'beforeend',
      `<div class="ProdutoListaItem">
        <div>
            <div class="ProdutoListaItem__sabor">${produto.sabor}</div>
            <div class="ProdutoListaItem__preco">R$ ${produto.preco.toFixed(
              2,
            )}</div>
            <div class="ProdutoListaItem__descricao">${produto.descricao}</div>
          </div>
            <img class="ProdutoListaItem__foto" src=${
              produto.foto
            } alt=${`Paleta de ${produto.sabor}`} />
        </div>`,
    );
  });
}

async function achePorIdProdutos() {
  const id = document.querySelector('#idProduto').value;

  const response = await fetch(`${baseUrl}/produto/${id}`);
  const produto = await response.json();

  const produtoEscolhidoDiv = document.querySelector('#produtoEscolhido');

  produtoEscolhidoDiv.innerHTML = `
  <div class="ProdutoCardItem">
  <div>
      <div class="ProdutoCardItem__sabor">${produto.sabor}</div>
      <div class="ProdutoCardItem__preco">R$ ${produto.preco.toFixed(2)}</div>
      <div class="ProdutoCardItem__descricao">${produto.descricao}</div>
    </div>
      <img class="ProdutoCardItem__foto" src=${
        produto.foto
      } alt=${`Paleta de ${produto.sabor}`} />
  </div>`;
}

acheTodosProdutos();
achePorIdProdutos();
