import { VoteSystem } from "./VoteSystem";

export class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    if (!this.votes[candidate]) {
      this.votes[candidate] = 1;
    } else {
      this.votes[candidate] += 1;
    }
  }

  getResults(): object {
    const entries: [string, number][] = [];

    // transformar para array
    for (const c in this.votes) {
      entries.push([c, this.votes[c]]);
    }

    entries.sort(function (a, b) {
      return b[1] - a[1];
    });

    return entries;
  }
}
