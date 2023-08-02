const objectA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

console.log(objectA);
objectA.chaveA = 'Novo Valor';
console.log(objectA);

// Objeto tipado
const objectB: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

console.log(objectB);
objectB.chaveC = 'Novo Valor';
console.log(objectB);

// Objeto tipado - outra forma
const objectC: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

console.log(objectC);
objectC.chaveC = 'Novo Valor';
objectC.randomKey = 'Novo Valor';
console.log(objectC);
objectC.chaveC = 'AAAA';
console.log(objectC);
