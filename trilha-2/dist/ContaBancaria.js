"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.saldo = 0;
        this.titular = titular;
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
    depositarDinheiro(valor) {
        this.saldo += valor;
        return valor;
    }
    sacarDinheiro(valor) {
        this.saldo -= valor;
        return valor;
    }
}
const contaBancaria = new ContaBancaria("Mauro", 300);
const saldo = contaBancaria.getSaldo();
console.log(contaBancaria);
const deposito = contaBancaria.depositarDinheiro(500);
console.log(`Você depositou ${deposito} e seu saldo atual é ${saldo}`);
const saque = contaBancaria.sacarDinheiro(100);
console.log(`Você depositou ${saque} e seu saldo atual é ${saldo}`);
