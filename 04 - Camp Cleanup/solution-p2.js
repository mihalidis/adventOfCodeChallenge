import { parseInput } from "../utils/index.js";

const parsedInputArray = parseInput("./04 - Camp Cleanup/input.txt").split("\n");

const overlaps = (pair1, pair2) => {
  const [a1, b1] = pair1.map(parseFloat);
  const [a2, b2] = pair2.map(parseFloat);
  
  if (a1 >= a2 && b1 <= b2) return true;
  if (a2 >= a1 && b2 <= b1) return true;
  if (a1 === b2 && a2 < b1) return true;
  if (b1 === a2 && a1 < b2) return true;
  if (a1 > a2 && a1 < b2 && b1 > b2) return true;
  if (b1 > a2 && b1 < b2 && a1 < a2) return true;
  if (a2 > a1 && a2 < b1 && b2 > b1) return true;
  if (b2 < b1 && b2 > a1 && a2 < a1) return true;
  
  return false;
};

const splittedArray = parsedInputArray.reduce((acc, item) => {
  const [pair1, pair2] = item.split(',').map(str => str.split('-'));
  if (overlaps(pair1, pair2)) acc++;
  return acc;
}, 0);

console.log(splittedArray);