function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('First', 'Test');

const newT = noReturn('Abvc', 'De');

console.log(newT); // NewT é undefinied

const test = {
  nome: 'Leonardo',
  sobrenome: 'Vardiero',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

test.exibirNome();
