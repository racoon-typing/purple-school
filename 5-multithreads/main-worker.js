const { Worker } = require('worker_threads');

// Вычисление при помощи worker
const workerFunction = (number) => {
    return new Promise((resolve) => {
        performance.mark('start');
        const worker = new Worker('./worker.js', {
            workerData: {
                number
            }
        });

        worker.on('message', (msg) => {
            performance.mark('end');
            performance.measure('calc', 'start', 'end');

            const measureResult = performance.getEntriesByName('calc').pop();

            console.log('Количество элементов в arrSplit:', msg);
            console.log('Время выполнения (миллисекунды):', measureResult);

            resolve(msg)
        });
    });
}


const main = async () => {
    await workerFunction(300000);
}

main();
