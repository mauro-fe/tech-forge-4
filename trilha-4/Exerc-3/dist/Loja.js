"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
class Loja {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find((p) => p.codigo === codigo);
    }
}
exports.Loja = Loja;
