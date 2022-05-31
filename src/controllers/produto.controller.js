const produtosService = require('../services/produto.service');
const mongooose = require('mongoose');

//Achar todos
const acheTodosProdutosController = async (req, res) => {
  const produtos = await produtosService.acheTodosProdutosService();
  if (produtos.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum produto cadastrado!' });
  }
  res.send(produtos);
};

//Achar por ID
const achePorIdController = async (req, res) => {
  const parametroId = (req.params.id);
  if (!mongooose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const escolhaProduto = await produtosService.achePorIdService(parametroId);
  if (!escolhaProduto) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }
  res.send(escolhaProduto);
};

//Criar
const criarProdutoController = async (req, res) => {
  const produto = req.body;
  if (
    !produto ||
    !produto.nome ||
    !produto.descricao ||
    !produto.foto ||
    !produto.formula
  ) {
    res
      .status(400)
      .send({
        mensagem:
          'Você não preencheu todos os dados para adicionar um novo produto ao catálogo!',
      });
  }
  const novoProduto = await produtosService.criarProdutoService(produto);
  res.status(201).send(novoProduto);
};

//Atualizar
const atualizarProdutoController = (req, res) => {
  const parametroId = +req.params.id;
  const ediçaoProduto = req.body;
  if (!parametroId) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  if (
    !ediçaoProduto ||
    !ediçaoProduto.sabor ||
    !ediçaoProduto.descricao ||
    !ediçaoProduto.foto ||
    !ediçaoProduto.preco
  ) {
    return res
      .status(400)
      .send({
        message: 'Você não preencheu todos os dados para editar o produto!',
      });
  }
  const atualizaçaoProduto = produtosService.atualizarProdutService(
    parametroId,
    ediçaoProduto,
  );
  res.send(atualizaçaoProduto);
};

//Deletar
const deletarProdutoController = (req, res) => {
  const parametroId = Number(req.params.id);
  if (!parametroId) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
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
