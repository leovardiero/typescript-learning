let x: unknown;

x = 100;
x = 'Leo';
x = 900;

const y = 500;

// console.log(x + y); -> compilador reclama pq eu n chequei o tipo
if (typeof x === 'number') console.log(x + y); // -> Aqui pode pq chequei o tipo
