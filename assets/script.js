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
            <div class="ProdutoListaItem__preco">R$ ${produto.preco}</div>
            <div class="ProdutoListaItem__descricao">${produto.descricao}</div>
          </div>
            <img class="ProdutoListaItem__foto" src=${
              produto.foto
            } alt=${`Nome Produto ${produto.sabor}`} />
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


async function criarProduto() {
  const sabor = document.querySelector('#sabor').value;
  const preco = document.querySelector('#preco').value;
  const descricao = document.querySelector('#descricao').value;
  const foto = document.querySelector('#foto').value;

  const produto = {
    sabor,
    preco,
    descricao,
    foto,
  };
  const response = await fetch(`${baseUrl}/criar-produto`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(produto),
  });

  const novoProduto = await response.json();

  const html = `<div class="ProdutoListaItem">
  <div>
    <div class="ProdutoListaItem__sabor">${novoProduto.sabor}</div>
    <div class="ProdutoListaItem__preco">R$ ${novoProduto.preco}</div>
    <div class="ProdutoListaItem__descricao">${novoProduto.descricao}</div>
  </div>
    <img class="ProdutoListaItem__foto" src=${
      novoProduto.foto
    } alt=${`Nome do Produto ${novoProduto.sabor}`} />
  </div>`;

  document.getElementById('produtoList').insertAdjacentHTML('beforeend', html);

  fecharModalCadastro();
}

async function atualizarProduto() {}

async function deletarProduto() {}

function abrirModalCadastro() {
  document.querySelector('.modal-overlay').style.display = 'flex';
}

function fecharModalCadastro() {
  document.querySelector('.modal-overlay').style.display = 'none';
  document.querySelector('#sabor').value = '';
  document.querySelector('#preco').value = 0;
  document.querySelector('#descricao').value = '';
  document.querySelector('#foto').value = '';
}
