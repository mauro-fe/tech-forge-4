export abstract class VoteSystem {
  protected votes: Record<string, number> = {};

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}
