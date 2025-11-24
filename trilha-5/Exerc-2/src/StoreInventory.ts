import { Inventory } from "./Inventory";

export class StoreInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (quantity <= 0) return;

    if (!this.items[item]) {
      this.items[item] = Math.min(quantity, 10);
    } else {
      this.items[item] = Math.min(this.items[item] + quantity, 10);
    }

    if (this.items[item] === 10) {
      console.log(`O item "${item}" atingiu o limite máximo de 10 unidades.`);
    }
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}
