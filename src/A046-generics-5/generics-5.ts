export class Person<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

const pessoa1 = new Person('Leo', 30);
const pessoa2 = new Person(['Leo', 'Vardiero'], 30);
const pessoa3 = new Person('Leo', { idade: 30 });
const pessoa4 = new Person<string, number>('Leo', 30);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

// But com stack
export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  isEmptyStack(): boolean {
    return this.counter === 0;
  }

  pop(): T | void {
    if (this.isEmptyStack()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  lenth(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('Leooo');

while (!stack.isEmptyStack()) {
  console.log(stack.pop());
}
