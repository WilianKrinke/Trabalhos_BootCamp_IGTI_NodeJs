import BooksTable from '../models/livros.model.js'

export async function insertBooksRepositories(datas){
    const wasRegistered = await BooksTable.create(datas)

    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}

export async function allBookDatasRepositories(){
    const allBookDatas = await BooksTable.findAll({
        attribute:['nome', 'valor', 'valor', 'autorid']
    })

    return allBookDatas;
}

export async function bookDatasRepositories(id){
    const bookDatas = await BooksTable.findAll({
        where: {livroid: id}
    })

    return bookDatas;
}

export async function updateBooksRepositories(datas){
    const hasUpdated = await BooksTable.update(datas, {
        where:{livroid: datas.id}
    })

    if (hasUpdated.isNewRecord == undefined) {
        return true
    } else {
        return false
    }
}

export async function deleteBookRepositories(id){
    const hasDeleted = await BooksTable.destroy({
        where: {livroid: id}
    })

    return hasDeleted;
}