"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leao = void 0;
const Animal_1 = require("./Animal");
class Leao extends Animal_1.Animal {
    constructor() {
        super(80);
    }
    comer() {
        console.log("O leão está caçando...");
        this.reduzirEnergia(30);
        this.aumentarEnergia(50);
    }
}
exports.Leao = Leao;
