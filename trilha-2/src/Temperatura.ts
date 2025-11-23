class Temperatura {
  private valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  public converteParaFahrenheit(): number {
    return this.valor * 1.8 + 32;
  }

  public converteParaKelvin(): number {
    return this.valor + 273.15;
  }

  public getCelsius(): number {
    return this.valor;
  }
}

const temperatura = new Temperatura(25);

console.log(`Celsius: ${temperatura.getCelsius()}°C`);
console.log(`Fahrenheit: ${temperatura.converteParaFahrenheit()}°F`);
console.log(`Kelvin: ${temperatura.converteParaKelvin()} K`);
