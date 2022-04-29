import express from "express";
import { deleteClient, getClient, insertClient, updateClient } from "../controllers/clientes.controller";

const router = express.Router()

router.post('/insert', insertClient)
router.get('/get/:id?', getClient)
router.put('/update', updateClient)
router.delete('/delete/:id', deleteClient)