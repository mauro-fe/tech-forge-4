export abstract class FavoriteManager {
  protected favorites: string[] = [];

  abstract addFavorite(item: string): void;

  getFavorites(): string[] {
    return this.favorites;
  }
}
