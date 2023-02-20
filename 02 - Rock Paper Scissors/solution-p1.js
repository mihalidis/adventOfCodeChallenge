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
won: 6 point
draw: 3 point
lose: 0 point

rock: 1 point (A, X)
paper: 2 point (B, Y)
scissors: 3 point (C, Z)
*/
let sumpoint = 0;

splittedArray.forEach(move => {
	sumpoint += getMovePoint(move);
	switch (move.me) {
		case 'X':
			sumpoint += 1;
			break;
		case 'Y':
			sumpoint += 2;
			break;
		case 'Z':
			sumpoint += 3;
			break;
	}
});

function getMovePoint(moves) {
	const points = {
		'AX': 3,
		'AY': 6,
		'AZ': 0,
		'BX': 0,
		'BY': 3,
		'BZ': 6,
		'CX': 6,
		'CY': 0,
		'CZ': 3,
	}
	const move = moves.opponent + moves.me;
	return points[move];
}

console.log(sumpoint)