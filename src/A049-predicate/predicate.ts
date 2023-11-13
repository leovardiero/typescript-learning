function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber(10));
console.log(isNumber('ABC'));

export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma('A', 'B', 'C'));
// console.log(soma(...[1, 2, 3, 4, 'ab', 'c', 'd', 2]));
// console.log(soma(1, 2, 3, 4, 'A'));
