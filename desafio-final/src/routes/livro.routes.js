import express from 'express';
import { insertBooksController } from '../controllers/livros.controller.js';

const router = express.Router()

router.post('/insert-books', insertBooksController)





router.use((err, req, res, next)=> {
    console.log(err.message)
    res.status(400).send(err.message)
})


export default router;