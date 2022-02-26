import { createOrderServices } from "../services/createOrder.services.js"

export async function createOrderController(req, res, next){
    try {
        const data = req.body

        if (!data.cliente || !data.produto || !data.valor) {
            throw new Error('Preencha todos os Campos')
        }

        createOrderServices(data)

        res.status(200).send('Okay')
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}