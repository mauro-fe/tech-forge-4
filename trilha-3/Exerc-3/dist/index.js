"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PagamentoCartao_1 = require("./PagamentoCartao");
const PagamentoBoleto_1 = require("./PagamentoBoleto");
function processarPagamentos(pagamentos) {
    pagamentos.forEach((pagamento) => pagamento.processar());
}
const pagamento1 = new PagamentoCartao_1.PagamentoCartao("1234567812345678", 150.5);
const pagamento2 = new PagamentoCartao_1.PagamentoCartao("9999", 80.0); // inválido
const pagamento3 = new PagamentoBoleto_1.PagamentoBoleto(230.0);
const lista = [pagamento1, pagamento2, pagamento3];
processarPagamentos(lista);
