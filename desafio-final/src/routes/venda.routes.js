import express from "express";
import { getAllSalesByAuthorController, getAllSalesByBookController, getAllSalesByClientController, getSaleController, insertSaleController } from "../controllers/sales.controller.js";

const router = express.Router()

router.post('/insert-sale', insertSaleController)
router.get('/get-sales/:id?', getSaleController)
router.get('/get-sales-by-client/:id', getAllSalesByClientController)
router.get('/get-sales-by-book/:id', getAllSalesByBookController)
router.get('/get-sales-by-author/:id', getAllSalesByAuthorController)

router.use((err, req, res, next) => {
    console.log(err)
    res.status(400).send(err.message)
})

export default router;