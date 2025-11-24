"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter((livro) => livro.disponivel);
    }
}
exports.Biblioteca = Biblioteca;
