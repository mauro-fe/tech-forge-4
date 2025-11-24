"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesFavoriteManager = void 0;
const FavoriteManager_1 = require("./FavoriteManager");
class MoviesFavoriteManager extends FavoriteManager_1.FavoriteManager {
    addFavorite(item) {
        if (this.favorites.indexOf(item) === -1) {
            this.favorites.push(item);
        }
    }
    getFavorites() {
        return this.favorites.sort();
    }
}
exports.MoviesFavoriteManager = MoviesFavoriteManager;
