const baseUrl = 'http://localhost:3000/produtos';

async function acheTodosProdutos() {
  const response = await fetch(`${baseUrl}/todos-produtos`);

  const produtos = await response.json();

  produtos.forEach((produto) => {
    document.querySelector('#produtoList').insertAdjacentHTML(
      'beforeend',
      `<div class="ProdutoListaItem" id="ProdutoListaItem_${produto.id}">
        <div>
            <div class="ProdutoListaItem__nome">${produto.nome}</div>
            <div class="ProdutoListaItem__preco">R$ ${produto.preco}</div>
            <div class="ProdutoListaItem__descricao">${produto.descricao}</div>
            <div class="ProdutoListaItem__acoes Acoes">
            <button class="Acoes__editar btn" onclick="abrirModal(${
              produto.id
            })" >Editar</button>
            <button class="Acoes__apagar btn" onclick="abrirModalDelete(${
              produto.id
            })">Apagar</button>
           </div>
          </div>
            <img class="ProdutoListaItem__foto" src=${
              produto.foto
            } alt=${`Nome do produto ${produto.nome}`} />
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
  <div class="ProdutoCardItem" id="ProdutoListaItem_${produto.id}>
  <div>
      <div class="ProdutoCardItem__nome"> ${produto.nome} </div>
      <div class="ProdutoCardItem__preco">R$ ${produto.preco.toFixed(2)}</div>
      <div class="ProdutoCardItem__descricao">${produto.descricao}</div>
    </div>
      <img class="ProdutoCardItem__foto" src=${
        produto.foto
      } alt="${`Produto de ${produto.nome}`}" />
  </div>`;
}
acheTodosProdutos();

async function criarProduto() {
  const id = document.querySelector('#id').value;
  const nome = document.querySelector('#nome').value;
  const preco = document.querySelector('#preco').value;
  const descricao = document.querySelector('#descricao').value;
  const foto = document.querySelector('#foto').value;

  const produto = {
    id,
    nome,
    preco,
    descricao,
    foto,
  };

  const modoEdicaoAtivado = id > 0;
  const endpoint = baseUrl + (modoEdicaoAtivado ? `/atualizar-produto/${id}` : `/criar-produto`);

  const response = await fetch(endpoint, {
    method: modoEdicaoAtivado ? 'put' : 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(produto),
  });

  const novoProduto = await response.json();

  const html = `<div class="ProdutoListaItem" id="ProdutoListaItem_${produto.id}>
  <div>
    <div class="ProdutoListaItem__nome">${novoProduto.nome}</div>
    <div class="ProdutoListaItem__preco">R$ ${novoProduto.preco}</div>
    <div class="ProdutoListaItem__descricao">${novoProduto.descricao}</div>
    <button class="Acoes__editar btn" onclick="abrirModal(${
      produto.id
    })" >Editar</button>
    <button class="Acoes__apagar btn" onclick="abrirModalDelete(${
      produto.id
    })">Apagar</button>
  </div>
    <img class="ProdutoListaItem__foto" src=${
      novoProduto.foto
    } alt=${`Nome do Produto ${novoProduto.nome}`} />
  </div>`;

  if (modoEdicaoAtivado) {
    document.querySelector(`#ProdutoListaItem_${id}`).outerHTML = html;
  } else {
    document
      .getElementById('produtoList')
      .insertAdjacentHTML('beforeend', html);
  }

  fecharModal();
}

async function abrirModal(id = null) {
  if (id != null) {
    document.querySelector('#title_header_modal').innerText =
      'Atualizar um produto';
    document.querySelector('#button-form-modal').innerText = 'Atualizar';

    const response = await fetch(`${baseUrl}/produto/${id}`);
    const produto = await response.json();

    document.querySelector('#nome').value = produto.nome;
    document.querySelector('#preco').value = produto.preco;
    document.querySelector('#descricao').value = produto.descricao;
    document.querySelector('#foto').value = produto.foto;
    document.querySelector('#id').value = produto.id;
  } else {
    document.querySelector('#title_header_modal').innerText =
      'Cadastrar um produto';
    document.querySelector('#button-form-modal').innerText = 'Cadastrar';
  }
  document.querySelector('#overlay').style.display = 'flex';
}

function fecharModal() {
  document.querySelector('.modal-overlay').style.display = 'none';
  document.querySelector('#nome').value = '';
  document.querySelector('#preco').value = 0;
  document.querySelector('#descricao').value = '';
  document.querySelector('#foto').value = '';
}

function abrirModalDelete(id) {
  document.querySelector("#overlay-delete").style.display = "flex";

  const btnSim = document.querySelector(".btn_delete_yes")

  btnSim.addEventListener("click", function() {
    deletarProduto(id);
  })
}
function fecharModalDelete() {
  document.querySelector("#overlay-delete").style.display = "none";
}

const deletarProduto = async (id) => {
  const response = await fetch(`${baseUrl}/deletar-produto/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  const result = await response.json();
  alert(result.message)
  document.getElementById("produtoList").innerHTML = ""
  acheTodosProdutos()
};
