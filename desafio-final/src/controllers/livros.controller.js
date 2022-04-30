import { insertBooksServices } from "../services/books.services.js"

export async function insertBooksController(req, res, next){
    try {
        const datas = req.body

        if (!datas.nome || !datas.valor || !datas.estoque || !datas.autorid) {
            throw new Error('Fill all fields')
        }

        const wasRegistered = await insertBooksServices(datas)

        if (wasRegistered) {
            res.status(200).send('Book has been registered')            
        } else {
            throw new Error('Book has not been registered')
        }

    } catch (error) {
        next(error)
    }
}