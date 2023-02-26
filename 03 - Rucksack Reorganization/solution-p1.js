import { parseInput } from "../utils/index.js";

const input = parseInput("./03 - Rucksack Reorganization/input.txt");

const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


const splittedArray = input.split("\n").reduce((acc, item) => {
	const splittedItem = item.split('');
	const middleIndex = Math.floor(splittedItem.length / 2);
	const firstHalf = splittedItem.slice(0, middleIndex);
	const secondHalf = splittedItem.slice(middleIndex);

	const sharedItem = firstHalf.find(item => secondHalf.includes(item));
	
	const findLowercaseLetterIndex = lowercaseLetters.findIndex(item => item === sharedItem);
	const findUppercaseLetterIndex = uppercaseLetters.findIndex(item => item === sharedItem);

	let final = 0;
	
	if (findLowercaseLetterIndex !== -1) {
		acc += (findLowercaseLetterIndex + 1)
	}

	if (findUppercaseLetterIndex !== -1) {
		acc += (findUppercaseLetterIndex + 27)
	}
		
	return acc;
}, 0);

console.log(splittedArray);