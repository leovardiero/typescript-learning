const body = document.querySelector('body');
if (body) body.style.background = 'red';

const body2 = document.querySelector('body')!; // o ! fala q o objeto não pode ser null *Non-null assertion
body2.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();
