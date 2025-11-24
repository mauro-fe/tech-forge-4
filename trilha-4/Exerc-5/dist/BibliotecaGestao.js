"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaGestao = void 0;
class BibliotecaGestao {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    filtrarPorGenero(genero) {
        return this.livros.filter((livro) => livro.genero.toLowerCase() === genero.toLowerCase());
    }
    buscarPorAutor(autor) {
        return this.livros.filter((livro) => livro.autor.toLowerCase() === autor.toLowerCase());
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros
            .filter((livro) => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
exports.BibliotecaGestao = BibliotecaGestao;
