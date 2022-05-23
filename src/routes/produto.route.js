const route = require('express').Router();7
const controllerProdutos = require('../controllers/produto.controller')

route.get('/todos-produtos', controllerProdutos.acheTodosProdutosController)
route.get('/produto/:id', controllerProdutos.achePorIdController)
route.post('/criar-produto', controllerProdutos.criarProdutoController);
route.put('/atualizar-produto/:id', controllerProdutos.atualizarProdutoController);
route.delete('/deletar-produto/:id', controllerProdutos.deletarProdutoController);


module.exports = route;
