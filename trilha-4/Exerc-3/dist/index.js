"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Loja_1 = require("./Loja");
const loja = new Loja_1.Loja();
// Cadastrando produtos
loja.adicionarProduto({ codigo: 1, nome: "Teclado" });
loja.adicionarProduto({ codigo: 2, nome: "Mouse Gamer" });
loja.adicionarProduto({ codigo: 3, nome: "Monitor 24p" });
const encontrado = loja.buscarProdutoPorCodigo(2);
console.log("Produto encontrado:", encontrado);
const naoExiste = loja.buscarProdutoPorCodigo(10);
console.log("Resultado inexistente:", naoExiste);
