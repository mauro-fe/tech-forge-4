"use strict";
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    converteParaFahrenheit() {
        return this.valor * 1.8 + 32;
    }
    converteParaKelvin() {
        return this.valor + 273.15;
    }
    getCelsius() {
        return this.valor;
    }
}
const temperatura = new Temperatura(25);
console.log(`Celsius: ${temperatura.getCelsius()}°C`);
console.log(`Fahrenheit: ${temperatura.converteParaFahrenheit()}°F`);
console.log(`Kelvin: ${temperatura.converteParaKelvin()} K`);
