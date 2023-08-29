export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Do something before...');
    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    console.log('Do something before...');
    const retSuper = super.getNomeCompleto();
    return retSuper + ' and do after :)';
  }
}

const aluno1 = new Aluno('Leo', 'Vardiero', 28, '123456', 'X1303');
const cliente1 = new Cliente('Leo', 'Vardiero', 28, '123456');
const pessoa1 = new Pessoa('Leo', 'Vardiero', 28, '123456');

console.log(aluno1);
console.log(cliente1);
console.log(pessoa1);

console.log(pessoa1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
