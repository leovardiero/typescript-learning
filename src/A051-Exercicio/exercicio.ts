type VotationOption = {
  votes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;

    this._votationOptions[votationIndex].votes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationoption of votation.votationOptions) {
        console.log(votationoption.option, votationoption.votes);
      }
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem favorita?');
votation1.addVotationOption({ option: 'Python', votes: 0 });
votation1.addVotationOption({ option: 'Javascript', votes: 0 });
votation1.addVotationOption({ option: 'TypeScript', votes: 0 });

votation1.vote(1);
votation1.vote(2);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
