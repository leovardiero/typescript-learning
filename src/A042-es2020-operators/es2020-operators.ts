// Encadeamento Opcional
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O Titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString());

// Coalescencia Nula
console.log(documento.data?.toDateString() ?? 'Não existe valor em data');
