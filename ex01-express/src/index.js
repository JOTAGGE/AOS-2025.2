const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log('Bem-Vindo ao Express de Gabriel!');
});

console.log(process.env.MY_SECRET);