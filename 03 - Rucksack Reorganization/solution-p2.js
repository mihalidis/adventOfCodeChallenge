import { parseInput } from "../utils/index.js";

const input = parseInput("./03 - Rucksack Reorganization/input.txt");

const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const splittedArray = input.split("\n");

const groupsOfThree = [];
for (let i = 0; i < splittedArray.length; i += 3) {
  const group = splittedArray.slice(i, i + 3);
  groupsOfThree.push(group);
}

const filteredGroupsOfThree = groupsOfThree.filter(group => group.length > 0);
const letters = [];

filteredGroupsOfThree.forEach(groups => {
	for (let i = 0; i < groups[0].length; i++) {
  const currentItem = groups[0][i];
  if (groups[1].includes(currentItem) && groups[2].includes(currentItem)) {
		letters.push(currentItem);
    break;
  }
}
});

let count = 0;
letters.forEach(item => {
	const findLowercaseLetterIndex = lowercaseLetters.findIndex(x => x === item);
	const findUppercaseLetterIndex = uppercaseLetters.findIndex(x => x === item);
	
	if (findLowercaseLetterIndex !== -1) {
		count += (findLowercaseLetterIndex + 1)
	}

	if (findUppercaseLetterIndex !== -1) {
		count += (findUppercaseLetterIndex + 27)
	}
});


console.log(count);