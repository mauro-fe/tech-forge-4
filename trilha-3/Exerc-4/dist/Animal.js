"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(energiaInicial = 50) {
        this.energia = energiaInicial;
    }
    aumentarEnergia(qtd) {
        this.energia += qtd;
    }
    reduzirEnergia(qtd) {
        this.energia -= qtd;
        if (this.energia < 0) {
            this.energia = 0;
        }
    }
    comer() {
        console.log("O animal está comendo...");
        this.aumentarEnergia(10);
    }
    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
}
exports.Animal = Animal;
