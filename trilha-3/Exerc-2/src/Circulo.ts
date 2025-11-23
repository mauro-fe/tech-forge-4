import { FiguraGeometrica } from "./FiguraGeometrica";

export class Circulo extends FiguraGeometrica {
  constructor(private raio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}
