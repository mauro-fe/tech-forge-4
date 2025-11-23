import { FiguraGeometrica } from "./FiguraGeometrica";

export class Quadrado extends FiguraGeometrica {
  constructor(private lado: number) {
    super();
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}
