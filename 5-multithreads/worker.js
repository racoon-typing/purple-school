const { parentPort, workerData } = require('worker_threads');
const { calc } = require('./calc.js');

const { threadId, totalThreads } = workerData;

const range = 300000;
const start = Math.floor((threadId / totalThreads) * range);
const end = Math.floor(((threadId + 1) / totalThreads) * range);

const result = calc(start, end);

parentPort.postMessage(result);
