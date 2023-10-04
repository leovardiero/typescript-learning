export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProdutos(new Produto('Camiseta', 49.9));
carrinho.inserirProdutos(new Produto('Tenis', 119.9));
carrinho.inserirProdutos(new Produto('Bermuda', 29.9));

console.log(carrinho.quantidadeProdutos());
console.log(carrinho.valorTotal());
