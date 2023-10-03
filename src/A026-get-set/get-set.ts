export class Person {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf; // ISSO É UM SETTER
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa1 = new Person('Leo', 'Vardiero', 27, '123.456.789-00');
console.log(pessoa1.cpf);
pessoa1.cpf = '001.002.003-99';
console.log(pessoa1.cpf);

/* OLD - HERE FOR COMPARISON
export class Person {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  setCpf(valor: string): void {
    this.cpf = valor;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Person('Leo', 'Vardiero', 27, '123.456.789-00');

console.log(pessoa1.getCpf());
pessoa1.setCpf('001.002.003-99');
console.log(pessoa1.getCpf());
*/
