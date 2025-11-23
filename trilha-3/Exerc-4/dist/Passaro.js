"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passaro = void 0;
const Animal_1 = require("./Animal");
class Passaro extends Animal_1.Animal {
    constructor() {
        super(40);
    }
    comer() {
        console.log("O pássaro está se alimentando...");
        this.aumentarEnergia(15);
    }
}
exports.Passaro = Passaro;
