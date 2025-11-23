import { Pagamento } from "./Pagamento";

export class PagamentoBoleto extends Pagamento {
  constructor(private valor: number) {
    super();
  }

  private gerarCodigoBoleto(): string {
    const parte1 = Math.floor(Math.random() * 1_0000_0000).toString();
    const parte2 = Math.floor(Math.random() * 1_0000_0000).toString();

    const p1 = ("00000000" + parte1).slice(-8);
    const p2 = ("00000000" + parte2).slice(-8);

    return `${p1}${p2}`;
  }

  processar(): void {
    const codigo = this.gerarCodigoBoleto();
    console.log(
      `Boleto gerado no valor de R$ ${this.valor.toFixed(2)}. Código: ${codigo}`
    );
  }
}
