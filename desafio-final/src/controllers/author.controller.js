import { insertAuthorServices, updateAuthorServices } from "../services/author.services.js"

export async function insertAuthorController(req, res, next){
    try {
        const datas = req.body

        if (!datas.nome || !datas.email || !datas.telefone) {
            throw new Error('Fill all fields')
        }

        const wasRegistered = await insertAuthorServices(datas)

        if (wasRegistered) {
            res.status(200).send('Author has been registered')
        } else {
            throw new Error('Author has not been registered')
        }

    } catch (error) {
        next(error)
    }
}

export async function updateAuthorController(req, res, next){
    try {
        const datas = req.body

        if (!datas.id || !datas.nome || !datas.email || !datas.telefone) {
            throw new Error('Fill all fields')
        }

        const hasUpdated = await updateAuthorServices(datas)

        if (hasUpdated) {
            res.status(200).send('Author has been updated')            
        } else {
            throw new Error("Author has not been updated")
        }

    } catch (error) {
        next(error)
    }
}