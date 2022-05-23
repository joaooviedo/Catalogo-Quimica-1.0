const produtosService = require('../services/produto.service');

//Achar todos
const acheTodosProdutosController = (req, res) => {
  const produtos = produtosService.acheTodosProdutosService();
  res.send(produtos);
};

//Achar por ID
const achePorIdController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaProduto = produtosService.achePorIdService(parametroId);
  res.send(escolhaProduto);
};

//Criar
const criarProdutoController = (req, res) => {
  const produto = req.body;
  const novoProduto = produtosService.criarProdutoService(produto);
  res.send(novoProduto);
};

//Atualizar
const atualizarProdutoController = (req, res) => {
  const parametroId = +req.params.id;
  const ediçaoProduto = req.body;
  const atualizaçaoProduto = produtosService.atualizarProdutService(
    parametroId,
    ediçaoProduto,
  );
  res.send(atualizaçaoProduto);
};

//Deletar
const deletarProdutoController = (req, res) => {
    const parametroId = req.params.id;
    produtosService.deletarProdutoService(parametroId);
    res.send({ message: 'Produto deletado com sucesso!' });
};

module.exports = {
  acheTodosProdutosController,
  achePorIdController,
  criarProdutoController,
  atualizarProdutoController,
  deletarProdutoController,
};
