const { parentPort, workerData } = require('worker_threads');
const { calc } = require('./calc');

parentPort.postMessage(calc(workerData.number));