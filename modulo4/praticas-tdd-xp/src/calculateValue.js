function calculateAmount(capital, rate, period) {
    const amount = capital * Math.pow((1 + rate), period - 1);

    return amount;
}

module.exports = calculateAmount;