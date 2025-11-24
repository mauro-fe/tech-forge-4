"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BibliotecaGestao_1 = require("./BibliotecaGestao");
const biblioteca = new BibliotecaGestao_1.BibliotecaGestao();
biblioteca.adicionarLivro({
    titulo: "A paciente silenciosa",
    autor: "Alex Michaelides",
    genero: "Suspense",
    disponivel: true,
});
biblioteca.adicionarLivro({
    titulo: "UmDiaSemReclamar",
    autor: "Davi Lago",
    genero: "Autoajuda",
    disponivel: true,
});
biblioteca.adicionarLivro({
    titulo: "O homem mais rico da Babilônia",
    autor: "George Samuel Clason",
    genero: "Autoajuda",
    disponivel: false,
});
console.log("Suspense:", biblioteca.filtrarPorGenero("Suspense"));
console.log("Livros de Alex Michaelides:", biblioteca.buscarPorAutor("Alex Michaelides"));
console.log("Disponíveis ordenados:", biblioteca.obterLivrosDisponiveisOrdenados());
