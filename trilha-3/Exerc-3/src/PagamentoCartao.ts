import { Pagamento } from "./Pagamento";

export class PagamentoCartao extends Pagamento {
  constructor(private numeroCartao: string, private valor: number) {
    super();
  }

  private validarNumeroCartao(): boolean {
    return /^\d{16}$/.test(this.numeroCartao);
  }

  processar(): void {
    if (!this.validarNumeroCartao()) {
      console.log("Cartão inválido. Pagamento não processado.");
      return;
    }

    console.log(
      `Pagamento de R$ ${this.valor.toFixed(
        2
      )} processado com cartão **** **** **** ${this.numeroCartao.slice(-4)}`
    );
  }
}
