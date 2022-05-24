const produtos = [
  {
    id: 1,
    sabor: 'Ácido Sulfúrico',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/acido-sulfurico.png',
    preco: 30.00,
  },
  {
    id: 2,
    sabor: 'Nitrato de Prata',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/nitrato-de-prata.jpg',
    preco: 35.0,
  },
  {
    id: 3,
    sabor: 'Persulfato de Amônio',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/persulfato-de-amonio.png',
    preco: 45.0,
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
