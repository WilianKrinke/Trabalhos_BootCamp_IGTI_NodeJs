import express from 'express';
import { deleteBookController, getBooksController, insertBooksController, updateBooksController } from '../controllers/book.controller.js';

const router = express.Router()

router.post('/insert-books', insertBooksController)
router.get('/get-book/:id?', getBooksController)
router.put('/update-books', updateBooksController)
router.delete('/delete-book/:id', deleteBookController)


router.use((err, req, res, next)=> {
    console.log(err.message)
    res.status(400).send(err.message)
})


export default router;