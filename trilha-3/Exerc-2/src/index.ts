import { Circulo } from "./Circulo";
import { Quadrado } from "./Quadrado";
import { Triangulo } from "./Triangulo";
import { FiguraGeometrica } from "./FiguraGeometrica";

function imprimirAreas(figuras: FiguraGeometrica[]) {
  figuras.forEach((figura) => {
    console.log("Área:", figura.calcularArea());
  });
}

const figuras: FiguraGeometrica[] = [
  new Circulo(5),
  new Quadrado(4),
  new Triangulo(6, 3),
];

imprimirAreas(figuras);
