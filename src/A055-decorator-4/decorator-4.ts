/* eslint-disable @typescript-eslint/no-explicit-any */

type Constructor = {
  new (...args: any[]): any;
};

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor): Constructor {
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

function outroDecorator(target: Constructor) {
  console.log('Sou o outro decorador');
  return target;
}

@outroDecorator // Depois esse
@inverteNomeECor('valor1', 'valor2') // Chama esse
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
