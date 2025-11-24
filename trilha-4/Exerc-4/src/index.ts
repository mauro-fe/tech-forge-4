import { Biblioteca } from "./Biblioteca";

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({
  titulo: "A paciente silenciosa",
  autor: " Alex Michaelides",
  disponivel: true,
});

biblioteca.adicionarLivro({
  titulo: "UmDiaSemReclamar",
  autor: "Davi Lago",
  disponivel: false,
});

biblioteca.adicionarLivro({
  titulo: "O homem mais rico da Babilônia",
  autor: "George Samuel Clason",
  disponivel: true,
});

const disponiveis = biblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis:", disponiveis);
