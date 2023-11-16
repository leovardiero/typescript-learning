/* eslint-disable @typescript-eslint/no-explicit-any */
@decorator
export class Animal {
  constructor(
    public name: string,
    public cor: string,
  ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverse(args[0]);
      this.cor = this.inverse(args[1]);
    }

    inverse(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const AnimalDecorated = decorator(Animal);

// Animal já está decorado
const animal = new Animal('papagaio', 'verde');
console.log(animal);

const animalDecorated = new AnimalDecorated('Arara', 'Azul');
console.log(animalDecorated);
