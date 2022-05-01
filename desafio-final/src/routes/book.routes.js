import express from 'express';
import { deleteBookController, getBooksByAuthorController, getBooksController, insertBookInfoController, insertBooksController, updateBooksController } from '../controllers/book.controller.js';

const router = express.Router()

router.post('/insert-books', insertBooksController)
router.post('/insert-book-info', insertBookInfoController)
router.get('/get-book/:id?', getBooksController)
router.get('/get-book-by-author/:autoridpam', getBooksByAuthorController)
router.put('/update-books', updateBooksController)
router.delete('/delete-book/:id', deleteBookController)




router.use((err, req, res, next)=> {
    console.log(err.message)
    res.status(400).send(err.message)
})

export default router;