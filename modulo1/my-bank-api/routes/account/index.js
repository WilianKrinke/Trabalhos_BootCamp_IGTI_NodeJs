import express from "express";
import { promises as fs } from 'fs';
import loggerWinston from '../../logs/logs.js';

const {readFile, writeFile} = fs
const router = express.Router()

const accountJsonFileName = 'accounts.json'

router.post('/', async (req, res, next) => {
    try {
        let accountReceived = req.body;  
        
        if (!accountReceived || !accountReceived.name || accountReceived.balance == null) {
            throw new Error('Datas is not defined')
        }  
        
        const data = JSON.parse(await readFile(accountJsonFileName));

        accountReceived = {
            id: data.nextId++,
            name: accountReceived.name,
            balance: accountReceived.balance
        }
             
        data.accounts.push(accountReceived);    
        await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));

        res.status(200).send('Account created: ' + JSON.stringify(accountReceived));       
    } catch (error) {
        next(error)
    }
})

router.get('/:id?', async (req, res, next) => {
    try {
        const {id} = req.params

        if (id !== undefined) { 
            const {accounts} = JSON.parse(await readFile(accountJsonFileName));
            const singleData = accounts.filter((item) => item.id === parseInt(id))
         
            res.status(200).send(JSON.stringify(singleData))            
        } else {
            const {accounts} = JSON.parse(await readFile(accountJsonFileName));
            res.status(200).send(JSON.stringify(accounts))
        }         
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const {id} = req.params

        const data = JSON.parse(await readFile(accountJsonFileName));
        data.accounts = data.accounts.filter(item => item.id !== parseInt(id));

        await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));

        res.status(200).send('Deleted');
    } catch (error) {
        next(error)
    }
})

router.put('/', async(req, res, next) => {
    try {
        const account = req.body;

        if (!account || !account.name || account.balance == null || !account.id) {
            throw new Error('Id, Name and Balance is required')
        }

        const data = JSON.parse(await readFile(accountJsonFileName));
        const index = data.accounts.findIndex(item => item.id === account.id)

        if (index === -1) {
            throw new Error('Not Find')
        }

        data.accounts[index].name = account.name;
        data.accounts[index].balance = account.balance;

        await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));

        res.status(200).send('Changed')

    } catch (error) {
        next(error)
    }
})

router.patch('/update-balance',async(req, res, next) => {
    try {
        const account = req.body;

        if (!account.id || account.balance == null) {
            throw new Error('Id and Balance is required')
        }

        const data = JSON.parse(await readFile(accountJsonFileName));
        const index = data.accounts.findIndex(item => item.id === account.id)

        if (index === -1) {
            throw new Error('Not Find')
        }

        data.accounts[index].balance = account.balance;
        await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));

        res.status(200).send('Changed')
    } catch (error) {
        next(error)
    }
})

router.use((err, req, res, next) => {
    console.log(err.message)
    loggerWinston.error(`${req.method} | ${req.baseUrl}: ${err.message}`)
    res.status(400).send(err.message)
})


export default router;