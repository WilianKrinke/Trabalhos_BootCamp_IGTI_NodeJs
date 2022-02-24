import express from "express";
import { promises as fs } from 'fs';

const {readFile, writeFile} = fs
const router = express.Router()

const accountJsonFileName = 'accounts.json'

router.post('/', async (req, res) => {
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
        res.status(400).send(error.message)
    }
})

router.get('/:id?', async (req, res) => {
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
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params

        const data = JSON.parse(await readFile(accountJsonFileName));
        data.accounts = data.accounts.filter(item => item.id !== parseInt(id));

        await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));

        res.status(200).send('Deleted');
    } catch (error) {
        res.status(400).send(error.message)
    }
})


export default router;