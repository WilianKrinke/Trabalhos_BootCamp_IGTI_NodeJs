import { getTopSellingProductsServices } from "../services/getTopSellingProducts.services.js"

export async function topSellingProductsController(req, res, next){
    try {
        const moreSellingProducts = await getTopSellingProductsServices()
        res.status(200).send(JSON.stringify(moreSellingProducts))
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}