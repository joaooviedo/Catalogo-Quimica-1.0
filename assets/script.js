const baseUrl = 'http://localhost:3000/paletas';

async function acheTodosProdutos() {
  const response = await fetch(`${baseUrl}/produtos/todos-produtos`);

  const produtos = await response.json();

  produtos.forEach((produto) => {
    document.getElementById('produtoList').insertAdjacentHTML(
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

acheTodosProdutos();
