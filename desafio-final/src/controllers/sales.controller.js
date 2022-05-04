import { insertSaleService } from "../services/sales.services.js"

export async function insertSaleController(req, res, next){
    try {
        const datas = req.body

        if (!datas.venda_data || !datas.clienteid || !datas.livroid) {
            throw new Error('Fill all fields')
        }

        const wasRegistered = await insertSaleService(datas)

        if (wasRegistered) {
            res.status(200).send('Sale has been registered')
        } else {
            throw new Error('Sale has not been registered')
        }
        
    } catch (error) {
        next(error)
    }
}