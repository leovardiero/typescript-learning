/* eslint-disable @typescript-eslint/no-explicit-any */
function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('sou o decorador', target);

    return class extends target {
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverse(args[0]);
        this.cor = this.inverse(args[1]);
      }

      inverse(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(
    public name: string,
    public cor: string,
  ) {
    console.log('Eu sou a classe');
  }
}

// Animal já está decorado
const animal = new Animal('papagaio', 'verde');
console.log(animal);
