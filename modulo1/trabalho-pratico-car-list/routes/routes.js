import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Chamou Rota')
})

router.post('/', (req, res) => {
    console.log('Chamou Rota')
})



export default router;