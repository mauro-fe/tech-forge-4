import { Livro } from "./Livro";

export class Biblioteca {
  private livros: Livro[] = [];

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter((livro) => livro.disponivel);
  }
}
