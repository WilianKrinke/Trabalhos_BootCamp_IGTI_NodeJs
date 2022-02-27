import { getTotalValuesByClientServices } from "../services/getTotalValuesByClient.services.js";

export async function getTotalValuesByClientController(req, res, next){
    try {
        const clientName = req.params;
        const totalValues = await getTotalValuesByClientServices(clientName);

        res.status(200).send(JSON.stringify({
            cliente: clientName.clientName,
            totalValueOrders: totalValues
        }))
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}