export class Empresa {
  public readonly nome: string;
  protected readonly funcionarios: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.funcionarios.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.funcionarios) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '111.111.111/0001-11');
  }

  popColab(): Colaborador | null {
    const colaborador = this.funcionarios.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const Udemy1 = new Udemy();
Udemy1.addColaborador(new Colaborador('Leo', 'Vardiero'));
Udemy1.addColaborador(new Colaborador('Maria', 'de Souza'));
Udemy1.addColaborador(new Colaborador('Fulano', 'de Tal'));
console.log(Udemy1);

Udemy1.showColaboradores();
const removedColab = Udemy1.popColab();
console.log(removedColab);
Udemy1.showColaboradores();
