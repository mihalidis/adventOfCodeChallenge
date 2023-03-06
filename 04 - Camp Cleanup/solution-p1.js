import { parseInput } from "../utils/index.js";

const parsedInputArray = parseInput("./04 - Camp Cleanup/input.txt").split("\n");

const splittedArray = parsedInputArray.reduce((acc, item) => {
	const tempArr = item.split(',').map(x => x.split('-'));

	if (parseFloat(tempArr[0][0]) >= parseFloat(tempArr[1][0]) && parseFloat(tempArr[0][1]) <= parseFloat(tempArr[1][1])) {
		acc++;
	} else if (parseFloat(tempArr[1][0]) >= parseFloat(tempArr[0][0]) && parseFloat(tempArr[1][1]) <= parseFloat(tempArr[0][1])) {
		acc++
	}

	return acc;
}, 0);

console.log(splittedArray);