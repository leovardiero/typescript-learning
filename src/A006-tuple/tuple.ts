const dadosCliente: [number, string] = [1, 'Leonardo'];

// tuplas são mutaveis!
console.log(dadosCliente);
dadosCliente[0] = 2;
console.log(dadosCliente);

// Para ser imutavel:
const newTuple: readonly [number, string] = [1, 'Dado A'];
console.log(newTuple);
// newTuple[1] = 23; -> Retorna um erro!
