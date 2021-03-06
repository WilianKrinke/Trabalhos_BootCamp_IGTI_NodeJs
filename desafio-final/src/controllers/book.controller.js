import { allBookDatasServices, bookDataServices, deleteBookInfoService, deleteBookReviewServices, deleteBookService, getBookByAuthorServices, insertBookInfoServices, insertBookReviewService, insertBooksServices, updateBookInfoService, updateBooksServices } from "../services/books.services.js"

export async function insertBookController(req, res, next){
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
        const data = req.body

        if (!data.livroId || !data.descricao || !data.paginas || !data.editora) {
            throw new Error('Fill all fields')
        }

        await insertBookInfoServices(data)
        res.status(200).send('Book info has been registered')

    } catch (error) {
        next(error)
    }
}


export async function insertBookReviewController(req, res, next){
    try {
        const datas = req.body

        if (!datas.livroId || !datas.note || !datas.review ) {
            throw new Error('Fill all fields')
        }

        await insertBookReviewService(datas)
        res.status(200).send(`Review has been registered in book id ${datas.livroId}`)

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
        const {autoridparam} = req.params 

        const booksByAuthor = await getBookByAuthorServices(autoridparam)
        res.status(200).send(booksByAuthor)

    } catch (error) {
        next(error)
    }
}


export async function updateBookController(req, res, next){
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

export async function updateBookInfoController(req, res, next){
    try {
        const data = req.body

        if (!data.livroId || !data.descricao || !data.paginas || !data.editora) {
            throw new Error('Fill all fields')
        }

        await updateBookInfoService(data)
        res.status(200).send('Book info has been updated')

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

export async function deleteBookInfoController(req, res, next){
    try {
        const {id} = req.params
        await deleteBookInfoService(id)

        res.status(200).send('Book info has been deleted')
        
    } catch (error) {
        next(error)
    }
}

export async function deleteBookReviewController(req, res, next){
    try {
        const {id} = req.params
        await deleteBookReviewServices(id)

        res.status(200).send('Book review has been deleted')

    } catch (error) {
        
    }
}