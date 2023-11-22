const { EventEmitter } = require('events');
const myEmitter = new EventEmitter();

let nodePath = process.argv[0];
let appPath = process.argv[1];

let firstNum = process.argv[2];
let secondNum = process.argv[3];
let operation = process.argv[4];


myEmitter.on('result', (result) => {
    console.log(result);
});

myEmitter.on('add', (a, b) => {
    myEmitter.emit('result', a + b);
});

myEmitter.on('subtract', (a, b) => {
    myEmitter.emit('result', a - b);
});

myEmitter.on('multiply', (a, b) => {
    myEmitter.emit('result', a * b);
});

myEmitter.on('divide', (a, b) => {
    myEmitter.emit('result', a / b);
});


// Получение данных
myEmitter.emit(operation, firstNum, secondNum);

