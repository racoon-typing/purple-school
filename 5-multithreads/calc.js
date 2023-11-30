module.exports.calc = function calc(start, end) {
    const numbers = [];

    for (let i = start; i < end; i++) {
        numbers.push(i);
    }

    const divisibleByThree = numbers.filter((num) => num % 3 === 0);

    return divisibleByThree.length;
};
