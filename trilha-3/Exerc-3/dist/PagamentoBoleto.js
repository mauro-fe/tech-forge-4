"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoBoleto = void 0;
const Pagamento_1 = require("./Pagamento");
class PagamentoBoleto extends Pagamento_1.Pagamento {
    constructor(valor) {
        super();
        this.valor = valor;
    }
    gerarCodigoBoleto() {
        const parte1 = Math.floor(Math.random() * 100000000).toString();
        const parte2 = Math.floor(Math.random() * 100000000).toString();
        const p1 = ("00000000" + parte1).slice(-8);
        const p2 = ("00000000" + parte2).slice(-8);
        return `${p1}${p2}`;
    }
    processar() {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado no valor de R$ ${this.valor.toFixed(2)}. Código: ${codigo}`);
    }
}
exports.PagamentoBoleto = PagamentoBoleto;
