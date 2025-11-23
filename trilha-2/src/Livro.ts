class Livro {
  private titulo: string;
  private autor: string;
  private paginas: number;
  private lido: boolean;

  constructor(titulo: string, autor: string, paginas: number, lido: boolean) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  public marcarComoLido() {
    this.lido = true;
    console.log(`O livro "${this.titulo}" foi marcado como lido!`);
  }

  public getLivro() {
    return {
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,
      lido: this.lido,
    };
  }
}

const livro = new Livro(
  "A Paciente Silenciosa",
  "Alex Michaelides",
  336,
  false
);

console.log(livro.getLivro());
livro.marcarComoLido();
console.log(livro.getLivro());
