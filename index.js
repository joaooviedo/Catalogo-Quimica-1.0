const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const produtos = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get('/produtos/todos-produtos', (req, res) => {
  res.send(produtos);
});

app.get('/produtos/produto/:id', (req, res) => {
  const idParam = Number(req.params.id);
  const escolhaProduto = produtos.find((produto) => produto.id === idParam);
  res.send(escolhaProduto);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
