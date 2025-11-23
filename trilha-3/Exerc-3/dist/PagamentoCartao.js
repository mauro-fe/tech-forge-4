"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoCartao = void 0;
const Pagamento_1 = require("./Pagamento");
class PagamentoCartao extends Pagamento_1.Pagamento {
    constructor(numeroCartao, valor) {
        super();
        this.numeroCartao = numeroCartao;
        this.valor = valor;
    }
    validarNumeroCartao() {
        return /^\d{16}$/.test(this.numeroCartao);
    }
    processar() {
        if (!this.validarNumeroCartao()) {
            console.log("Cartão inválido. Pagamento não processado.");
            return;
        }
        console.log(`Pagamento de R$ ${this.valor.toFixed(2)} processado com cartão **** **** **** ${this.numeroCartao.slice(-4)}`);
    }
}
exports.PagamentoCartao = PagamentoCartao;
