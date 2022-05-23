const produtos = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

const acheTodosProdutosService = () => {
  return produtos;
};

const achePorIdService = (parametroId) => {
  return produtos.find((produto) => produto.id === parametroId);
};

const criarProdutoService = (novoProduto) => {
  const novoId = produtos.length + 1;
  novoProduto.id = novoId;
  produtos.push(novoProduto);
  return novoProduto;
};

const atualizarProdutService = (id, ediçaoProduto) => {
    ediçaoProduto['id'] = id;
    const produtoIndex = produtos.findIndex((produto) => produto.id == id);
    produtos[produtoIndex] = ediçaoProduto;
    return ediçaoProduto;
}

const deletarProdutoService = (id) => {
    const produtoIndex = produtos.findIndex((produto) => produto.id == id);
    return produtos.splice(produtoIndex, 1);
  
}

module.exports = {
  acheTodosProdutosService,
  achePorIdService,
  criarProdutoService,
  atualizarProdutService,
  deletarProdutoService,
};
