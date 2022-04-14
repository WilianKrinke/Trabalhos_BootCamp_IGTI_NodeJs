function calculateAmount(capital, rate, period) {
    const amount = capital * Math.pow((1 + rate), period - 1);

    return amount;
}

function roundFunction(number) {
    const roundNumber = Math.round(number)

    return roundNumber;
}

function calculateInstallments(value, installments) {
    const baseInstallment = roundFunction(value / installments)

    const result = Array(installments).fill(baseInstallment)

    return result;
}

module.exports = {calculateAmount, roundFunction, calculateInstallments};