import { MoviesFavoriteManager } from "./MoviesFavoriteManager";
import { BooksFavoriteManager } from "./BooksFavoriteManager";

const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Velozes e Furiosos");
filmes.addFavorite("Guerra Mundial Z");
filmes.addFavorite("Sherek");

const livros = new BooksFavoriteManager();
livros.addFavorite("A paciente silenciosa");
livros.addFavorite("O homem mais rico da babilônia");
livros.addFavorite("A paciente silenciosa");

console.log("Filmes:", filmes.getFavorites());
console.log("Livros:", livros.getFavorites());
