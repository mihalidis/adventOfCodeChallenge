import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

console.log((await execAsync(`node "./01 - Calorie Counting/solution-p1.js"`)).stdout);