import express from 'express';
import { insertAuthorController, updateAuthorController } from '../controllers/author.controller.js';

const router = express.Router()

router.post('/insert-author', insertAuthorController)
router.put('/update-author', updateAuthorController)


router.use((err, req, res, next) => {
    console.log(err.message)
    res.status(400).send(err.message)
})

export default router;