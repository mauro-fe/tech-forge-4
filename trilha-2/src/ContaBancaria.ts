class ContaBancaria {
  private titular: string;
  private saldo: number = 0;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  public getSaldo() {
    return this.saldo;
  }

  public depositarDinheiro(valor: number) {
    this.saldo += valor;
    return valor;
  }

  public sacarDinheiro(valor: number) {
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
