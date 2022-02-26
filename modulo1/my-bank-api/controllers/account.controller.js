import { createAccountService, deleteAccountService, getAccountServices, upDateAccountService, upDateBalanceService } from '../services/account.services.js';

export async function createAccountController(req, res, next){
    try {
        let accountReceived = req.body;  
        
        if (!accountReceived || !accountReceived.name || accountReceived.balance == null) {
            throw new Error('Datas is not defined')
        }  
        
        const account = await createAccountService(accountReceived)
        
        res.status(200).send('Account created: ' + JSON.stringify(account));       
    } catch (error) {
        next(error)
    }
}

export async function getAccountController(req, res, next){
    try {
        const {id} = req.params;

        const singleOrAllAccounts = await getAccountServices(id);
        
        res.status(200).send(JSON.stringify(singleOrAllAccounts));
    } catch (error) {
        next(error)
    }
}

export async function deleteAccountController(req, res, next){
    try {
        const {id} = req.params

        await deleteAccountService(id)

        res.status(200).send('Deleted');
    } catch (error) {
        next(error)
    }
}

export async function upDateAccountController(req, res, next){
    try {
        const account = req.body;

        if (!account || !account.name || account.balance == null || !account.id) {
            throw new Error('Id, Name and Balance is required')
        }

        await upDateAccountService()

        res.status(200).send('Changed')
    } catch (error) {
        next(error)
    }
}

export async function upDateBalanceController(req, res, next){
    try {
        const account = req.body;

        if (!account.id || account.balance == null) {
            throw new Error('Id and Balance is required')
        }

        await upDateBalanceService()

        res.status(200).send('Changed')
    } catch (error) {
        next(error)
    }
}