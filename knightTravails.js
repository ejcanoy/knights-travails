export class KnightTravails {
    static X_VALUE = 0;
    static Y_VALUE = 1;
    static X_END_BORDER = 7;
    static Y_END_BORDER = 7;
    static X_START_BORDER = 0;
    static Y_START_BORDER = 0;


    constructor(start, end) {
        this.moves = this.generateMoves();
        this.start = start;
        this.end = end;
    }

    generateMoves(){
        const result = {};
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                let moves = this.generateValidMoves([x, y]);
                const loc = [x, y];
                result[loc] = moves;
            }
        }
        return result;
    }

    generateValidMoves(curLocation) {
        const validMoves = []
        const allLMoves = [[-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2]];
        for (const move of allLMoves) {
            let x = curLocation[KnightTravails.X_VALUE] + move[KnightTravails.X_VALUE];
            let y = curLocation[KnightTravails.Y_VALUE] + move[KnightTravails.Y_VALUE];
            if (x >= KnightTravails.X_START_BORDER && x <= KnightTravails.X_END_BORDER && y >= KnightTravails.Y_START_BORDER && y <= KnightTravails.Y_END_BORDER) {
                validMoves.push([x, y]);
            }
        }
        return validMoves;
    }

    bfs() {
        const visited = new Set();
        const q = [];
        q.push([this.start, [this.start]]);
        visited.add(this.start);
        while (q.length > 0) {
            const [curChessSquare, path] = q.shift();
            const futureMoves = this.moves[curChessSquare];
            for (const location of futureMoves) {
                if (location[KnightTravails.X_VALUE] == this.end[KnightTravails.X_VALUE] && location[KnightTravails.Y_VALUE] == this.end[KnightTravails.Y_VALUE]) {
                    return [...path, location];
                }
                if (!visited.has(location)) {
                    visited.add(location);
                    q.push([location, [...path, location]]);
                }
            }
        }
        return [];
    }

}