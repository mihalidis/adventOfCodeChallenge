import { parseInput } from "../utils/index.js";

const lines = parseInput("./05 - Supply Stacks/input.txt", true).split("\n");

const emptyLineIndex = lines.findIndex(x => x === '');
const containerArray = lines.slice(0, emptyLineIndex);
const instructionArray = lines.slice(emptyLineIndex + 1, lines.length);

// container area
const containersArea = containerArray[containerArray.length-1]
	.split(' ')
	.filter(x => x !== '')
	.reduce((acc, item) => {
			acc[item] = [];
			return acc;
		}, {});

// work directory area
const newContainersArray = [];
containerArray.slice(0, -1).forEach(item => {
	newContainersArray.push(item.split('    '));
});

const reducedContainers = newContainersArray.map(subArray => subArray.reduce((acc, element) => {
  if (element.includes(' ')) {
    acc.push(...element.split(' '));
  } else {
		acc.push(element);
	}

	return acc;
}, []));


// place the containers
reducedContainers.forEach((subarray) => {
	subarray.forEach((sub, index) => {
		if (sub !== '') {
			containersArea[index+1].push(sub)
		}
	})
});

// instructions
const instructionsObject = instructionArray.map(subitems => {
  const splittedArray = subitems.split(' ');
  
  return {
    [splittedArray[0]]: splittedArray[1],
    [splittedArray[2]]: splittedArray[3],
    [splittedArray[4]]: splittedArray[5]
  };
});

// final moves
instructionsObject.forEach((instruct, index) => {
	const from = containersArea[instruct.from];
	const to = containersArea[instruct.to];

	to.unshift(...from.splice(0, instruct.move));
});

const answer = [];

 Object.values(containersArea).forEach(item => {
 	answer.push(item[0]);
 });

console.log(answer.map(e => e.replace(/\[|\]/g, '')).join(''));
