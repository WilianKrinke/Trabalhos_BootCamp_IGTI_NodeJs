import express from "express";
import { promises as fs } from 'fs';

const {readFile, writeFile} = fs
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        let accountReceived = req.body;    
        const data = JSON.parse(await readFile('accounts.json'));

        accountReceived = {
            id: data.nextId++,
            ...accountReceived
        }
             
        data.accounts.push(accountReceived);    
        await writeFile('accounts.json', JSON.stringify(data, null, 2));

        res.status(200).send('Account created: ' + JSON.stringify(accountReceived));       
    } catch (error) {
        res.status(400).send(error.message)
    }
})


export default router;