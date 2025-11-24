import { Inventory } from "./Inventory";
import { WarehouseInventory } from "./WarehouseInventory";
import { StoreInventory } from "./StoreInventory";

const warehouse: Inventory = new WarehouseInventory();
const store: Inventory = new StoreInventory();

// Armazém (quantidade ilimitada)
warehouse.addItem("Notebook", 50);
warehouse.addItem("Mouse", 120);
warehouse.addItem("Mouse", 30);

// Loja (máx 10 por item)
store.addItem("Mouse", 4);
store.addItem("Mouse", 9); // deve limitar em 10
store.addItem("Teclado", 20); // vira 10

warehouse.removeItem("Notebook"); // remover item inteiro

console.log("=== INVENTÁRIO DO ARMAZÉM ===");
console.log(warehouse.getInventory());

console.log("=== INVENTÁRIO DA LOJA ===");
console.log(store.getInventory());
