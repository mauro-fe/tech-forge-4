"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksFavoriteManager = void 0;
const FavoriteManager_1 = require("./FavoriteManager");
class BooksFavoriteManager extends FavoriteManager_1.FavoriteManager {
    addFavorite(item) {
        if (this.favorites.indexOf(item) === -1) {
            this.favorites.unshift(item);
        }
    }
}
exports.BooksFavoriteManager = BooksFavoriteManager;
