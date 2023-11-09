interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Leo',
  sobrenome: 'Vardiero',
  idade: 28,
};

console.log(aluno);

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 15,
};

console.log(aluno2);
