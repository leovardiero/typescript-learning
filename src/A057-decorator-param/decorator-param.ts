/* eslint-disable @typescript-eslint/no-explicit-any */

function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastName;
  }

  set fullName(value: string) {
    const palavras = value.split(/\s+/g);
    const firstName = palavras.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = palavras.join(' ');
  }
}

const pessoa = new OnePerson('Leo', 'Vardiero', 28);

const method = pessoa.method('Olá mundo');

console.log(method);
