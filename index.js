import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

console.log((await execAsync(`node "./02 - Rock Paper Scissors/solution-p1.js"`)).stdout);