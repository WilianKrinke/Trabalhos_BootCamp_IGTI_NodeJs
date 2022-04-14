const {calculateAmount, roundFunction, calculateInstallments} = require('.././src/calculateValue')

describe('mathematical operations tests', () => {
    test('should returning money amount', () => {
        const amount = calculateAmount(100,0.0175,1)
    
        expect(amount).toBe(100)
    })

    test('should round to two decimal places', () => {
        const round = roundFunction(15.66666666666666)

        expect(round).toBe(16)
    })

    test('calculate installments', () => {
        //premissas/dado(giver)
        const installmentsNumber = 6

        //operações/quando(when)
        const installments = calculateInstallments(250,installmentsNumber)

        //resultado esperado/então(then)
        expect(installments.length).toBe(installmentsNumber)
    });

    test('single installment, equal amount', () => {
        const installmentsNumber = 1

        const installments = calculateInstallments(50, installmentsNumber)

        expect(installments.length).toBe(installmentsNumber)
        expect(installments[0]).toBe(50)
    });
    
    
    
});


