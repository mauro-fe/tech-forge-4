"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Leao_1 = require("./Leao");
const Passaro_1 = require("./Passaro");
const animais = [new Leao_1.Leao(), new Passaro_1.Passaro()];
animais.forEach((animal) => {
    console.log("==== Novo animal ====");
    animal.comer();
    animal.statusEnergia();
});
