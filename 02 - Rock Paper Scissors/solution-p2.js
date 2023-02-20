import { parseInput } from "../utils/index.js";

const input = parseInput("./02 - Rock Paper Scissors/input.txt");

// const splittedArray = input.split("\n");

const splittedArray = input.split("\n").reduce((acc,item) => {
	const moves = item.split(' ');
	acc.push({
		opponent: moves[0],
		me: moves[1]
	});
	return acc;
}, []);

/*
Z won: 6 point
Y draw: 3 point
X lose: 0 point

rock: 1 point (A, X)
paper: 2 point (B, Y)
scissors: 3 point (C, Z)
*/
let sumPoint = 0;

splittedArray.forEach(move => {
	sumPoint += getMovePoint(move);
	switch (move.me) {
		case 'X':
			sumPoint += 0;
			break;
		case 'Y':
			sumPoint += 3;
			break;
		case 'Z':
			sumPoint += 6;
			break;
	}
});

function getMovePoint(moves) {
	const points = {
		'AX': 3,
		'AY': 1,
		'AZ': 2,
		'BX': 1,
		'BY': 2,
		'BZ': 3,
		'CX': 2,
		'CY': 3,
		'CZ': 1,
	}
	const move = moves.opponent + moves.me;
	return points[move];
}

console.log(sumPoint);