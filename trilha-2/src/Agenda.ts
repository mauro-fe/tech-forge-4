class Agenda {
  private compromissos: string[] = [];

  public adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
    console.log(`Compromisso adicionado: ${compromisso}`);
  }

  public listarCompromissos(): void {
    console.log("Lista de compromissos:");
    this.compromissos.forEach((compromisso, index) => {
      console.log(`${index + 1}. ${compromisso}`);
    });
  }
}

const agenda = new Agenda();

agenda.adicionarCompromisso("Consulta médica às 14h");
agenda.adicionarCompromisso("Reunião de trabalho às 10h");
agenda.adicionarCompromisso("Aniversário da mãe às 19h");

agenda.listarCompromissos();
