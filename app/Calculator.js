class Calculator {
    constructor(){     
    };

    add(...numbers) {
        return numbers.reduce((totalSum, currentNumber) =>
        totalSum + currentNumber);
    };

    multiply(...numbers) {
        return numbers.reduce((totalSum, currentNumber) =>
        totalSum * currentNumber);
    };

};

module.exports = Calculator;