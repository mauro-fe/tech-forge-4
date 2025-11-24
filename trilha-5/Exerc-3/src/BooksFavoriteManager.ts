import { FavoriteManager } from "./FavoriteManager";

export class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (this.favorites.indexOf(item) === -1) {
      this.favorites.unshift(item);
    }
  }
}
