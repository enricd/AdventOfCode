const fs = require("fs");
const path = require("path");

const filePath = __dirname + "/../data_inputs/day01_input.txt";
const rawInput = fs.readFileSync(filePath, "utf8");

const input = rawInput
  .trim()
  .split("\n")
  .map((l) => l.trim());

console.log(input)

