import express from "express";
import { deleteClientController, getClientController, insertClientController, updateClientController } from "../controllers/clientes.controller.js";

const router = express.Router()

router.post('/insert-client', insertClientController)
router.get('/get-client/:id?', getClientController)
router.put('/update-client', updateClientController)
router.delete('/delete-client/:id', deleteClientController)

router.use((err, req, res, next) => {
    console.log(err.message)
    res.status(400).send(err.message)
})

export default router;