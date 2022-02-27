import { getTotalValuesByProductServices } from "../services/getTotalValuesByProduct.services.js";

export async function getTotalValuesByProductNameController(req, res, next){
    try {
        const productName = req.params;

        const totalValues = await getTotalValuesByProductServices(productName)

        res.status(200).send(JSON.stringify({
            productName: productName.productName,
            value:totalValues
        }))

    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}