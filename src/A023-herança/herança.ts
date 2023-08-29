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
  getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno1 = new Aluno('Leo', 'Vardiero', 28, '123456');
const cliente1 = new Cliente('Leo', 'Vardiero', 28, '123456');
const pessoa1 = new Pessoa('Leo', 'Vardiero', 28, '123456');

console.log(aluno1);
console.log(cliente1);
console.log(pessoa1);

console.log(pessoa1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
