import express from "express";
import { createAccountController, deleteAccountController, getAccountController, upDateAccountController, upDateBalanceController } from "../controllers/account.controller.js";
import loggerWinston from '../logs/logs.js';

const router = express.Router()

router.post('/', createAccountController)
router.get('/:id?', getAccountController)
router.delete('/:id', deleteAccountController)
router.put('/', upDateAccountController)
router.patch('/update-balance', upDateBalanceController)

router.use((err, req, res, next) => {
    console.log(err.message)
    loggerWinston.error(`${req.method} | ${req.baseUrl}: ${err.message}`)
    res.status(400).send(err.message)
})


export default router;