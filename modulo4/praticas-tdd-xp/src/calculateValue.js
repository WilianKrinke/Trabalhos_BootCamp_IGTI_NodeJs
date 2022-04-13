function calculateAmount(capital, rate, period) {
    const amount = capital * Math.pow((1 + rate), period - 1);

    return amount;
}

function roundFunction(number) {
    const roundNumber = Math.round(number)

    return roundNumber;
}

module.exports = {calculateAmount, roundFunction};