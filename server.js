const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(4000, () => {
  console.log('O servidor está rodando na porta http://localhost:4000');
});
