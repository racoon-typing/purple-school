let nodePath = process.argv[0];
let appPath = process.argv[1];

let firstNum = process.argv[2];
let secondNum = process.argv[3];
let thirdNum = process.argv[4];

const timeInSeconds = firstNum * 3600 + secondNum * 60 + thirdNum;

setTimeout(() => {
    console.log(`Таймер отработал через: ${firstNum} ч. ${secondNum} м. ${thirdNum} с.`);
}, timeInSeconds * 1000);

