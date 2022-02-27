import { upDateOrderStatusServices } from "../services/upDateOrderStatus.services.js"

export async function upDateDeliveryStatusController(req, res, next){
    try {
        const datasReceived = req.params

        await upDateOrderStatusServices(datasReceived)

        res.status(200).send('Updated')
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}