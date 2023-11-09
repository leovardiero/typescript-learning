type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  owner: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  owner: 'Leo',
};

console.log(carro);
