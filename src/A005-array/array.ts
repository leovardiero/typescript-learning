// Array de number de input, number de saida
function multArray(...args: Array<number>): number {
  return args.reduce((ac, val) => ac * val, 1);
}

console.log(multArray(1, 2, 3, 4));

const result = multArray(1, 2, 3);
console.log(result);

// Array de string de input, string de saida
function concatString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

console.log(concatString('A', 'B', 'C'));

// Array de entrada, array de saida
function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(toUpper('A', 'B', 'C'));
