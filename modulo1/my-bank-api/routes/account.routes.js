import express from "express";
import { createAccount, deleteAccount, getAccount, upDateAccount, upDateBalance } from "../controllers/account.controller.js";
import loggerWinston from '../logs/logs.js';

const router = express.Router()

router.post('/', createAccount)
router.get('/:id?', getAccount)
router.delete('/:id', deleteAccount)
router.put('/', upDateAccount)
router.patch('/update-balance', upDateBalance)

router.use((err, req, res, next) => {
    console.log(err.message)
    loggerWinston.error(`${req.method} | ${req.baseUrl}: ${err.message}`)
    res.status(400).send(err.message)
})


export default router;