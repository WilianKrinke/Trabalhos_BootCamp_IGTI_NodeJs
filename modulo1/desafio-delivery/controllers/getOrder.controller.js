import { getOrderService } from "../services/getOrder.services.js";

export async function getOrderController(req, res, next){
    try {
        const {id} = req.params;
        const orderSelected = await getOrderService(id);

        res.status(200).send(JSON.stringify(orderSelected))
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}