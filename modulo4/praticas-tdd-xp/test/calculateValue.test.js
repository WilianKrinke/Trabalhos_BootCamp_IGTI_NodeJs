const calculateAmount = require('.././src/calculateValue')

test('Should returning money amount', () => {
    const amount = calculateAmount(100,0.0175,1)

    expect(amount).toBe(100)
})