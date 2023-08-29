export class Empresa {
  public readonly nome: string;
  private readonly funcionarios: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.funcionarios.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.funcionarios) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Lexis Nexis', '123456');

const colab1 = new Colaborador('Leo', 'Vardiero');
const colab2 = new Colaborador('Maria', 'de Souza');
const colab3 = new Colaborador('Fulano', 'de Tal');

console.log(empresa1);
empresa1.addColaborador(colab1);
empresa1.addColaborador(colab2);
empresa1.addColaborador(colab3);
empresa1.addColaborador({
  nome: 'Novo',
  sobrenome: 'Colab',
});
console.log(empresa1);

empresa1.showColaboradores();
