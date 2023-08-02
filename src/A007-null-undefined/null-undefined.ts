// UNDEFINED:

let x;

if (typeof x === 'undefined') x = 20;

console.log(x * 20);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

console.log(createPerson('Leonardo'));
console.log(createPerson('Leonardo', 'Vardiero'));

// NULL

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNum = squareOf(2);
const squareOfTwoStr = squareOf('2');

if (squareOfTwoNum === null) {
  console.log('Invalido!');
} else {
  console.log(squareOfTwoNum);
}

if (squareOfTwoStr === null) {
  console.log('Invalido!');
} else {
  console.log(squareOfTwoStr);
}
