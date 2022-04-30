import BooksTable from '../models/livros.model.js'

export async function insertBooksRepositories(datas){
    const wasRegistered = await BooksTable.create(datas)

    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}