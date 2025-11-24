import { Documento } from "./Documento";

export class Texto implements Documento {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  mostrar(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}
