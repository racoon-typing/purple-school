function calc(number) {
    const arr = [];
    const arrSplit = [];

    for (let i = 1; i < number; i++) {
        arr.push(i);

        if (arr[i - 1] % 3 === 0) {
            arrSplit.push(i);
        }
    }

    return arrSplit.length;
}

module.exports = { calc }