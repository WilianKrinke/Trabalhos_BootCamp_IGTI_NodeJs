import express from 'express';
import { deleteAuthorController, insertAuthorController, updateAuthorController } from '../controllers/author.controller.js';

const router = express.Router()

router.post('/insert-author', insertAuthorController)
router.put('/update-author', updateAuthorController)
router.delete('/delete-author/:id', deleteAuthorController)


router.use((err, req, res, next) => {
    console.log(err.message)
    res.status(400).send(err.message)
})

export default router;