export class Person {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('OI');
  }

  static criaPessoa(nome: string, sobrenome: string): Person {
    return new Person(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa1 = new Person('Leo', 'Vardiero', 27, '123.456.789-00');
console.log(pessoa1.cpf);
pessoa1.cpf = '001.002.003-99';
console.log(pessoa1.cpf);

Person.falaOi();

const pessoa2 = Person.criaPessoa('João', 'da Silva');

console.log(pessoa2);
