import { Animal } from "./Animal";

export class Passaro extends Animal {
  constructor() {
    super(40);
  }

  public comer(): void {
    console.log("O pássaro está se alimentando...");
    this.aumentarEnergia(15);
  }
}
