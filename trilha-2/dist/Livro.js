"use strict";
class Livro {
    constructor(titulo, autor, paginas, lido) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarComoLido() {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido!`);
    }
    getLivro() {
        return {
            titulo: this.titulo,
            autor: this.autor,
            paginas: this.paginas,
            lido: this.lido,
        };
    }
}
const livro = new Livro("A Paciente Silenciosa", "Alex Michaelides", 336, false);
console.log(livro.getLivro());
livro.marcarComoLido();
console.log(livro.getLivro());
