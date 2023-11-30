// Вычисление при помощи цикла
function calc(number) {
    performance.mark('start');

    const arr = [];
    const arrSplit = [];

    for (let i = 1; i < number; i++) {
        arr.push(i);

        if (arr[i - 1] % 3 === 0) {
            arrSplit.push(i);
        }
    }

    performance.mark('end');
    performance.measure('calc', 'start', 'end');
    const measureResult = performance.getEntriesByName('calc').pop();

    console.log(measureResult);
    return arrSplit.length;
}


const result = calc(300000);
console.log('Количество элементов в arrSplit:', result);

