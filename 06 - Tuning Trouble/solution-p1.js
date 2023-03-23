import { parseInput } from "../utils/index.js";

const tuningString = parseInput("./06 - Tuning Trouble/input.txt", true).split('');
console.log(tuningString);
let answer = 0;
for(let i = 0; i <= tuningString.length; i++) {
	const tempArr = [];
	for (let j = i; j <= i+3; j++) {
		if (tuningString[j]) {
			tempArr.push(tuningString[j]);
		}
	}
	
	if (!isThereTheSameElement(tempArr)) {
		answer = i+4;
		break;
	}
}

function isThereTheSameElement(arr) {
  return arr.some((item, index) => arr.slice(0, index).includes(item));
}

console.log(answer);