export class KnightTravailsDisplay {
    constructor(knightTravails) {
        this.knightTravails = knightTravails;
    }

    displayPath() {
        const path = this.knightTravails.bfs();
        console.log(`Start: [${this.knightTravails.start}]`);
        console.log(`End: [${this.knightTravails.end}]`)
        console.log(`You made it in ${path.length} moves! Here is the path =>`);
        for (const move of path) {
            console.log(move);
        }
    }
}