const {calculateAmount, roundFunction} = require('.././src/calculateValue')

describe('mathematical operations tests', () => {
    test('should returning money amount', () => {
        const amount = calculateAmount(100,0.0175,1)
    
        expect(amount).toBe(100)
    })

    test('should round to two decimal places', () => {
        const round = roundFunction(15.66666666666666)

        expect(round).toBe(16)
    })
    
});


