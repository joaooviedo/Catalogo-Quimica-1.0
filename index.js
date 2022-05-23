const express = require('express');
const cors = require('cors');
const route = require('./src/routes/produto.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/produtos', route)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
