import express from 'express';
import { authorizationCheck } from '../auth/authorizationCheckNorm.js';
import { deleteBookController, deleteBookInfoController, deleteBookReviewController, getBooksByAuthorController, getBooksController, insertBookController, insertBookInfoController, insertBookReviewController, updateBookController, updateBookInfoController } from '../controllers/book.controller.js';

const router = express.Router()

router.post('/insert-book', authorizationCheck, insertBookController)
router.post('/insert-book-info', insertBookInfoController)
router.post('/insert-book-review', insertBookReviewController)
router.get('/get-book/:id?', authorizationCheck, getBooksController)
router.get('/get-book-by-author/:autoridparam', getBooksByAuthorController)
router.put('/update-book', updateBookController)
router.put('/update-info-book', updateBookInfoController)
router.delete('/delete-book/:id', deleteBookController)
router.delete('/delete-info/:id', deleteBookInfoController)
router.delete('/delete-book-review/:id', deleteBookReviewController)


router.use((err, req, res, next)=> {
    console.log(err.message)
    res.status(400).send(err.message)
})

export default router;