import { upDateOrderServices } from "../services/upDateOrder.services.js";

export async function updateOrderController(req, res, next){
    try {
        const datasReceived = req.body;
       
        if (!datasReceived.id) {
            throw new Error('"Id" is required')
        } else if(!datasReceived.cliente){
            throw new Error('"Cliente" is required')
        } else if(!datasReceived.produto){
            throw new Error('"Produto" is required')
        } else if(!datasReceived.valor){
            throw new Error('"Valor" is required')
        } else if(datasReceived.entregue === undefined){
            throw new Error('"Entregue" is required')
        }

        await upDateOrderServices(datasReceived)

        res.status(200).send("Updated")
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}