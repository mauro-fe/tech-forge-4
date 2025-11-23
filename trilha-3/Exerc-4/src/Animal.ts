export class Animal {
  private energia: number;

  constructor(energiaInicial: number = 50) {
    this.energia = energiaInicial;
  }

  protected aumentarEnergia(qtd: number): void {
    this.energia += qtd;
  }

  protected reduzirEnergia(qtd: number): void {
    this.energia -= qtd;
    if (this.energia < 0) {
      this.energia = 0;
    }
  }

  public comer(): void {
    console.log("O animal está comendo...");
    this.aumentarEnergia(10);
  }

  public statusEnergia(): void {
    console.log(`Energia atual: ${this.energia}`);
  }
}
