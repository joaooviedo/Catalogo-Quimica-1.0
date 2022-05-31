const Produto = require('../models/Produto');
const mongooose = require('mongoose');

//Achar todos
const acheTodosProdutosService = async () => {
  const produtos = await Produto.find();
  return produtos;
};

//Achar por ID
const achePorIdService = async (parametroId) => {
  const produto = await Produto.findById(parametroId);
  return produto;
};

//Criar
const criarProdutoService = (novoProduto) => {
  const novoId = produtos.length + 1;
  novoProduto.id = novoId;
  produtos.push(novoProduto);
  return novoProduto;
};

//Atualizar
const atualizarProdutService = (id, ediçaoProduto) => {
  ediçaoProduto['id'] = id;
  const produtoIndex = produtos.findIndex((produto) => produto.id == id);
  produtos[produtoIndex] = ediçaoProduto;
  return ediçaoProduto;
};

//Deletar
const deletarProdutoService = (id) => {
  const produtoIndex = produtos.findIndex((produto) => produto.id == id);
  return produtos.splice(produtoIndex, 1);
};

module.exports = {
  acheTodosProdutosService,
  achePorIdService,
  criarProdutoService,
  atualizarProdutService,
  deletarProdutoService,
};
