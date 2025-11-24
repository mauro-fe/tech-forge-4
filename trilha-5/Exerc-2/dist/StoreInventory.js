"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreInventory = void 0;
const Inventory_1 = require("./Inventory");
class StoreInventory extends Inventory_1.Inventory {
    addItem(item, quantity) {
        if (quantity <= 0)
            return;
        if (!this.items[item]) {
            this.items[item] = Math.min(quantity, 10);
        }
        else {
            this.items[item] = Math.min(this.items[item] + quantity, 10);
        }
        if (this.items[item] === 10) {
            console.log(`O item "${item}" atingiu o limite máximo de 10 unidades.`);
        }
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
        return this.items;
    }
}
exports.StoreInventory = StoreInventory;
