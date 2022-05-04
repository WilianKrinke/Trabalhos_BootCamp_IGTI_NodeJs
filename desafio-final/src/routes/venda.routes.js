import express from "express";
import { insertSaleController } from "../controllers/sales.controller.js";

const router = express.Router()

router.post('/insert-sale', insertSaleController)



router.use((err, req, res, next) => {
    console.log(err)
    res.status(400).send(err.message)
})

export default router;