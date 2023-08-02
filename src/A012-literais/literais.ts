let x = 10; //eslint-disable-line
x = 0b1010;

const y = 10; // "10" é o tipo da constante, pq ela é constante

const pessoa = {
  nome: 'Leo' as const,
  sobrenome: 'Vardiero',
};

pessoa.nome = 'Leo';
pessoa.sobrenome = 'ASD';

console.log(pessoa);

export default 1;
