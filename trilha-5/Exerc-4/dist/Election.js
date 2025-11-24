"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Election = void 0;
const VoteSystem_1 = require("./VoteSystem");
class Election extends VoteSystem_1.VoteSystem {
    voteFor(candidate) {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 1;
        }
        else {
            this.votes[candidate] += 1;
        }
    }
    getResults() {
        return this.votes;
    }
}
exports.Election = Election;
