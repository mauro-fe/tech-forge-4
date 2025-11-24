import { LivroBiblioteca } from "./LivroBiblioteca";

export class BibliotecaGestao {
  private livros: LivroBiblioteca[] = [];

  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(
      (livro) => livro.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(
      (livro) => livro.autor.toLowerCase() === autor.toLowerCase()
    );
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter((livro) => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}
