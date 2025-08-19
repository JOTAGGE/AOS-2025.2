const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-Vindo ao Express de Gabriel!');
});

// Exporta o app para o Vercel cuidar
module.exports = app;
