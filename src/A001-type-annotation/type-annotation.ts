/*eslint-disable*/

// Tipos básicos:

let nome:string = 'Leonardo';
let idade: number = 30;
let adulto:boolean = true;
let simbolo: symbol = Symbol('A random symbol');

// Array

let numberArray : Array<number> = [1, 2, 3, 4];
let stringArray : Array<string> = ["A", "B", "C"];

let numberArray2 : number[] = [1, 2, 3, 4];
let stringArray2 : string[] = ["A", "B", "C"];

// Objetos

const person: {nome: string, idade: number, adulto?: boolean} = {
  nome: "Leonardo",
  idade: 27
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const sum = soma(1,2);

const soma2: (x:number, y: number) => number = (x, y) => x + y;


