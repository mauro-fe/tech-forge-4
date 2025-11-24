import { ProdutoLoja } from "./ProdutoLoja";

export class Loja {
  private produtos: ProdutoLoja[] = [];

  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find((p) => p.codigo === codigo);
  }
}
