const { Worker } = require('worker_threads');

const numThreads = 4; // Количество потоков

const main = () => {
    performance.mark('start');

    let arrLength = 0;

    for (let i = 0; i < numThreads; i++) {
        const worker = new Worker('./worker.js', { workerData: { threadId: i, totalThreads: numThreads } });

        worker.on('message', (result) => {
            arrLength += result;
        });
    }
    
    performance.mark('end');
    performance.measure('calc', 'start', 'end');
    const measureResult = performance.getEntriesByName('calc').pop();
    
    console.log(measureResult);
    console.log(arrLength);
};

main();