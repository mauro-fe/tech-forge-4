import { Election } from "./Election";
import { Poll } from "./Poll";

const election = new Election();
election.voteFor("Larissa");
election.voteFor("Mauro");
election.voteFor("Mauro");
election.voteFor("Larissa");
election.voteFor("Larissa");
election.voteFor("Larissa");
election.voteFor("Andreza");
election.voteFor("Andreza");

console.log("Resultado da Election:");
console.log(election.getResults());

const poll = new Poll();
poll.voteFor("Jose");
poll.voteFor("Marcos");
poll.voteFor("Jose");
poll.voteFor("Larissa");
poll.voteFor("Larissa");
poll.voteFor("Larissa");

console.log("Resultado da Poll:");
console.log(poll.getResults());
