import { FiguraGeometrica } from "./FiguraGeometrica";

export class Triangulo extends FiguraGeometrica {
  constructor(private base: number, private altura: number) {
    super();
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}
