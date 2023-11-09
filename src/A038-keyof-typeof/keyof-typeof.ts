const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  nova_cor: 'ihuu',
};

function traduzirCor(
  cor: keyof typeof coresObj,
  cores: typeof coresObj,
): string {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('nova_cor', coresObj));
