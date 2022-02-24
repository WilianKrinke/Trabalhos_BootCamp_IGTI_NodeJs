import express from "express";
import { promises as fs } from 'fs';

const {readFile, writeFile} = fs
const router = express.Router()

const accountJsonFileName = 'accounts.json'

router.post('/', async (req, res, next) => {
    try {
        let accountReceived = req.body;    
        const data = JSON.parse(await readFile(accountJsonFileName));

        accountReceived = {
            id: data.nextId++,
            ...accountReceived
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

        const data = JSON.parse(await readFile(accountJsonFileName));
        const index = data.accounts.findIndex(item => item.id === account.id)

        console.log('Chegou aqui')
        data.accounts[index] = account;
        await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));

        res.status(200).send('Changed')

    } catch (error) {
        next(error)
    }
})

router.patch('/update-balance',async(req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
})

router.use((err, req, res, next) => {
    console.log(err)
    res.status(400).send(err.message)
})


export default router;