import { allBookDatasServices, bookDataServices, deleteBookService, getBookByAuthorServices, insertBookInfoServices, insertBooksServices, updateBooksServices } from "../services/books.services.js"

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

export async function insertBookInfoController(req, res, next){
    try {
        const bookInfoData = req.body

        if (!bookInfoData.livroid || !bookInfoData.informacoes) {
            throw new Error('Fill all fields')
        }

        const wasRegisteredInfo = await insertBookInfoServices(bookInfoData)
        res.status(200).send(bookInfoData)





    } catch (error) {
        next(error)
    }
}


export async function getBooksController(req, res, next){
    try {
        const {id} = req.params;

        if (id === undefined) {
            const allBookDatas = await allBookDatasServices()
            res.status(200).send(allBookDatas)
        } else {
            const bookData = await bookDataServices(id)
            res.status(200).send(bookData)
        }
        
    } catch (error) {
        next(error)
    }
}

export async function getBooksByAuthorController(req, res, next){
    try {
        const {autoridpam} = req.params 

        const booksByAuthor = await getBookByAuthorServices(autoridpam)
        res.status(200).send(booksByAuthor)

    } catch (error) {
        next(error)
    }
}


export async function updateBooksController(req, res, next){
    try {
        const datas = req.body
        if (!datas.id || !datas.nome || !datas.valor || !datas.estoque || !datas.autorid) {
            throw new Error('Fill all fields')
        }

        const hasUpdated = await updateBooksServices(datas)

        if (hasUpdated) {
            res.status(200).send('Book has been updated')            
        } else {
            throw new Error("Book has not been updated")
        }

    } catch (error) {
        next(error)
    }
}

export async function deleteBookController(req, res, next){
    try {
        const {id} = req.params
        const hasDeleted = await deleteBookService(id)

        if (hasDeleted) {
            res.status(200).send('Book has been Deleted')
        } else {
            throw new Error('Book has not been deleted')
        }
    } catch (error) {
        next(error)
    }
}