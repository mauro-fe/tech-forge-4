class Produto {
  private nome: string;
  private preco: number;
  private quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  public getEstoque() {
    return this.preco * this.quantidade;
  }
  public getNome() {
    return this.nome;
  }
  public getQtd() {
    return this.quantidade;
  }
}

const produto = new Produto("Carregador", 200, 5);
const nome = produto.getNome();
const quantidade = produto.getQtd();
const estoque = produto.getEstoque();
console.log(
  `O produto ${nome} tem em estoque a quantidade de ${quantidade} unidades somando um total de R$ ${estoque}`
);
