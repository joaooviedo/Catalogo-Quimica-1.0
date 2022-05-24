const produtosService = require('../services/produto.service');

//Achar todos
const acheTodosProdutosController = (req, res) => {
  const produtos = produtosService.acheTodosProdutosService();
  if (produtos.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum produto cadastrado!' });
  }
  res.send(produtos);
};

//Achar por ID
const achePorIdController = (req, res) => {
  const parametroId = Number(req.params.id);
  if (!parametroId) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const escolhaProduto = produtosService.achePorIdService(parametroId);
  if (!escolhaProduto) {
    return res.status(404).send({ message: 'Produto não encontrado!' });
  }
  res.send(escolhaProduto);
};

//Criar
const criarProdutoController = (req, res) => {
  const produto = req.body;
  if (
    !produto ||
    !produto.sabor ||
    !produto.descricao ||
    !produto.foto ||
    !produto.preco
  ) {
    res
      .status(400)
      .send({
        mensagem:
          'Você não preencheu todos os dados para adicionar um novo produto ao catálogo!',
      });
  }
  const novoProduto = produtosService.criarProdutoService(produto);
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
