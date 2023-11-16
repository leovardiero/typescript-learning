/* eslint-disable @typescript-eslint/no-explicit-any */
function decorator(classPrototype: any, name: string | symbol): any {
  console.log(classPrototype);
  console.log(name);
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      propertyValue = value.split('').reverse().join('');
    },
  };
}

export class Person2 {
  @decorator
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(msg: string): string {
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

const pessoa = new Person2('Leo', 'Vardiero', 28);

const method = pessoa.method('Olá mundo');

console.log(method);
