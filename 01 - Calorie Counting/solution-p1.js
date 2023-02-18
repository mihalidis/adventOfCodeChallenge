import { parseLines } from "../utils/index.js";

const lines = parseLines("./01 - Calorie Counting/input.txt", true);

const ObjectArray = [...Object.values(lines)];

const allElves = [];
let elfCarrier = [];

ObjectArray.map((key, value) => {
	if (key !== "") {
		elfCarrier.push(key);
	} else {
		allElves.push(elfCarrier);
    elfCarrier = [];
	}
});

const totalCaloriesForElves = [];

Object.values(allElves).forEach(elf => {
	totalCaloriesForElves.push(elf.reduce((acc, item) => acc + parseInt(item), 0))
})

console.log(Math.max(...totalCaloriesForElves));

