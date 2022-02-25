import express from "express";
import { promises as fs } from 'fs';
import loggerWinston from '../logs/logs.js';
import brandHasFewerModels from '../services/brandHasFewerModels.js';
import brandHasMoreModels from "../services/brandHasMoreModels.js";

const {readFile, writeFile} = fs

const router = express.Router();
const carsJson = 'carList.json'

router.get('/brand-has-more-models',async(req, res, next) => {
    try {
        const data = JSON.parse(await readFile(carsJson)) 

        const datasOrderedByMoreModels = brandHasMoreModels(data)
        res.status(200).send(JSON.stringify(datasOrderedByMoreModels))
        
    } catch (error) {
        next(error)
    }
})

router.get('/brand-has-fewer-models',async(req, res, next) => {
    try {        
        const data = JSON.parse(await readFile(carsJson))  
              
        const datasOrderedByFewerModels = brandHasFewerModels(data)
        res.status(200).send(JSON.stringify(datasOrderedByFewerModels))

    } catch (error) {
        next(error)
    }
})

router.get('/brand-has-more-models-number/qtd',(req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
})

router.post('/', (req, res) => {
    console.log('Chamou Rota')
})

router.use('/', (err, req, res, next) => {
    console.log('Chamou Rota Error')
    loggerWinston.error(err.message)
})



export default router;