import { getAllSalesByAuthorServices, getAllSalesByBookServices, getAllSalesByClientServices, getAllSalesDatasServices, getSaleDataServices, insertSaleService } from "../services/sales.services.js"

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

export async function getSaleController(req, res, next){
    try {
        const {id} = req.params;

        if (id === undefined) {
            const allSalesDatas = await getAllSalesDatasServices()
            res.status(200).send(allSalesDatas)
        } else {
            const saleDatas = await getSaleDataServices(id)
            res.status(200).send(saleDatas)
        }

    } catch (error) {
        next(error)
    }
}

export async function getAllSalesByClientController(req, res, next){
    try {
        const {id} = req.params;

        const allSalesByClientDatas = await getAllSalesByClientServices(id)
        res.status(200).send(allSalesByClientDatas)       

    } catch (error) {
        next(error)
    }
}

export async function getAllSalesByBookController(req, res, next){
    try {
        const {id} = req.params;

        const allSalesByBookDatas = await getAllSalesByBookServices(id)
        res.status(200).send(allSalesByBookDatas)       

    } catch (error) {
        next(error)
    }
}

export async function getAllSalesByAuthorController(req, res, next){
    try {
        const {id} = req.params;

        const allSalesByAuthorDatas = await getAllSalesByAuthorServices(id)
        res.status(200).send(allSalesByAuthorDatas)       

    } catch (error) {
        next(error)
    }
}