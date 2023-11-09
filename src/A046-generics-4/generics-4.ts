type GetKeyFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const getKey: GetKeyFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = getKey(animal, 'idade');

console.log(vacinas);
