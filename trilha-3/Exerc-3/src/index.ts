import { Pagamento } from "./Pagamento";
import { PagamentoCartao } from "./PagamentoCartao";
import { PagamentoBoleto } from "./PagamentoBoleto";

function processarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach((pagamento) => pagamento.processar());
}

const pagamento1 = new PagamentoCartao("1234567812345678", 150.5);
const pagamento2 = new PagamentoCartao("9999", 80.0); // inválido
const pagamento3 = new PagamentoBoleto(230.0);

const lista: Pagamento[] = [pagamento1, pagamento2, pagamento3];

processarPagamentos(lista);
