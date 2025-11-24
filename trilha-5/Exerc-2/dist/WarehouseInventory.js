"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseInventory = void 0;
const Inventory_1 = require("./Inventory");
class WarehouseInventory extends Inventory_1.Inventory {
    addItem(item, quantity) {
        if (quantity <= 0)
            return;
        if (!this.items[item]) {
            this.items[item] = quantity;
        }
        else {
            this.items[item] += quantity;
        }
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
        return this.items;
    }
}
exports.WarehouseInventory = WarehouseInventory;
