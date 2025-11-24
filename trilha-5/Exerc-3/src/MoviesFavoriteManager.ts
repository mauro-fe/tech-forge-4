import { FavoriteManager } from "./FavoriteManager";

export class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (this.favorites.indexOf(item) === -1) {
      this.favorites.push(item);
    }
  }

  getFavorites(): string[] {
    return this.favorites.sort();
  }
}
