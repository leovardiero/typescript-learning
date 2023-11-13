/* eslint-disable @typescript-eslint/no-unused-vars */
const objeto1: Record<string, string | number> = {
  nome: 'Leonardo',
  sobrenome: 'Vardiero',
  idade: 28,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

const objeto2: PessoaProtocol = {
  nome: 'Leonardo',
  idade: 28,
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Parcial
type PessoaPartial = Partial<PessoaRequired>;
// Read Only
type PessoaReadOnly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto3: PessoaRequired = {
  nome: 'Leonardo',
  sobrenome: 'Vardiero',
  idade: 28,
};

console.log(objeto2);
console.log(objeto3);

// Extract
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

// Exclude
