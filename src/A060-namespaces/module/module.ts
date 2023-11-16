/* eslint-disable @typescript-eslint/no-namespace */

namespace MyNamespace {
  export const namespaceName = 'Leo';
  export class PersonNamespace {
    constructor(public name: string) {}
  }

  const person = new PersonNamespace('Leo');
  console.log(person);

  export namespace OtherNamespace {
    export const naspaceName = 'Other Namesspace';
  }
}

const newperson = new MyNamespace.PersonNamespace('Leo');
console.log(newperson);
console.log(MyNamespace.OtherNamespace.naspaceName);
