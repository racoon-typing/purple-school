const { divide } = require('./divide.js');
const { add } = require('./add.js');
const { multiply } = require('./multiply.js');
const { subtract } = require('./subtract.js');


let nodePath = process.argv[0];
let appPath = process.argv[1];

let firstNum = process.argv[2];
let secondNum = process.argv[3];
let operation = process.argv[4];

switch (operation) {
    case "add":
        add(firstNum, secondNum);
        break;
    case "subtract":
        subtract(firstNum, secondNum);
        break;
    case "multiply":
        multiply(firstNum, secondNum);
        break;
    case "divide":
        divide(firstNum, secondNum);
        break;
}