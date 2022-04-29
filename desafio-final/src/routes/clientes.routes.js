import express from "express";
import { deleteClientController, getClientController, insertClientController, updateClientController } from "../controllers/clientes.controller.js";

const router = express.Router()

router.post('/insert', insertClientController)
router.get('/get/:id?', getClientController)
router.put('/update', updateClientController)
router.delete('/delete/:id', deleteClientController)

router.use((err, req, res, next) => {
    console.log(err.message)
    res.status(400).send(err.message)
})

export default router;