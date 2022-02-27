import { deleteOrderServices } from "../services/deleteOrder.services.js"

export async function deleteOrderController(req, res, next){
    try {
        const {id} = req.params
        await deleteOrderServices(id)
        
        res.status(200).send('Deleted')
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}