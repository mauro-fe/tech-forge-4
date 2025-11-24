"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = void 0;
const VoteSystem_1 = require("./VoteSystem");
class Poll extends VoteSystem_1.VoteSystem {
    voteFor(candidate) {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 1;
        }
        else {
            this.votes[candidate] += 1;
        }
    }
    getResults() {
        const entries = [];
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
exports.Poll = Poll;
