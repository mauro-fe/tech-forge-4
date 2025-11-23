"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circulo_1 = require("./Circulo");
const Quadrado_1 = require("./Quadrado");
const Triangulo_1 = require("./Triangulo");
function imprimirAreas(figuras) {
    figuras.forEach((figura) => {
        console.log("Área:", figura.calcularArea());
    });
}
const figuras = [
    new Circulo_1.Circulo(5),
    new Quadrado_1.Quadrado(4),
    new Triangulo_1.Triangulo(6, 3),
];
imprimirAreas(figuras);
