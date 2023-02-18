import { parseLines } from "../utils/index.js";
const input = parseLines("./01 - Calorie Counting/input.txt", true);

const elvesAndCalories = input.map(test => {
    return test.split('\n').map(x => parseInt(x.replace("\r", "")));
});


const singleElf = [];
let temporaryElf = [];

elvesAndCalories[0].forEach(x => {
    if (!isNaN(x)) {
        temporaryElf.push(x);
    } else {
        singleElf.push(test);
        temporaryElf = [];
    }
});

const totalCaloriesForElves = [];
singleElf.forEach(arr => totalCaloriesForElves.push(arr.reduce((acc, x) => x+acc, 0)));

console.log(Math.max(...totalCaloriesForElves));

