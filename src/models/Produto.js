const mongooose = require('mongoose');

const ProdutoEsquema = new mongooose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  formula: { type: String, required: true },
});

const Produto = mongooose.model('produtos', ProdutoEsquema);
module.exports = Produto;
