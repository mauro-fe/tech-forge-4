import { VoteSystem } from "./VoteSystem";

export class Election extends VoteSystem {
  voteFor(candidate: string): void {
    if (!this.votes[candidate]) {
      this.votes[candidate] = 1;
    } else {
      this.votes[candidate] += 1;
    }
  }

  getResults(): object {
    return this.votes;
  }
}
