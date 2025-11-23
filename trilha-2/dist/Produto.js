"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    getEstoque() {
        return this.preco * this.quantidade;
    }
    getNome() {
        return this.nome;
    }
    getQtd() {
        return this.quantidade;
    }
}
const produto = new Produto("Carregador", 200, 5);
const nome = produto.getNome();
const quantidade = produto.getQtd();
const estoque = produto.getEstoque();
console.log(`O produto ${nome} tem em estoque a quantidade de ${quantidade} unidades somando um total de R$ ${estoque}`);
