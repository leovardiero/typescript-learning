type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 25,
  nome: 'Fulano',
  sobrenome: 'De Tal',
};

console.log(pessoa);
