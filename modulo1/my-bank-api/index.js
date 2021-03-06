import express from "express";
import { promises as fs } from 'fs';
import accountRouter from "./routes/account.routes.js";

const {readFile, writeFile} = fs

const app = express()
app.use(express.json())

app.use('/account', accountRouter)

app.listen(3000, async () => {
    try {
        await readFile('accounts.json')
        console.log('Listen')        
    } catch (error) {        
        const initialJson = {
            nextId: 1,
            accounts: []
        }

        writeFile('accounts.json', JSON.stringify(initialJson)).then(() => {
            console.log('Listen')
        }).catch((error) => {
            console.log(error)
        })
    }    
})




