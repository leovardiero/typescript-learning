type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;

// Função literal
export function myFilter(
  array: unknown[],
  callbackfn: FilterCallBack<unknown>,
): unknown[] {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

// Função generics
export function myFilterGeneric<T>(
  array: T[],
  callbackfn: FilterCallBack<T>,
): T[] {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

const array = [1, 2, 3, 4, 5, 6];
const arrFilterOri = array.filter((value) => value < 5);
const arrMyFilter = myFilter(array, (value: unknown) => {
  if (typeof value === 'number') return value < 5;
  return false;
});

const arrMyFilterGeneric = myFilterGeneric(array, (value) => value < 5);

console.log(arrFilterOri);
console.log(arrMyFilter);
console.log(arrMyFilterGeneric);
