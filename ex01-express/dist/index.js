"use strict";

var nome = 'José Gabriel Barros Dos Santos';
var idade = 20;
var cidade = 'São Paulo';
var saudacao = "Ol\xE1, meu nome \xE9 ".concat(nome, ", tenho ").concat(idade, " anos e moro em ").concat(cidade, ".");
console.log(saudacao);