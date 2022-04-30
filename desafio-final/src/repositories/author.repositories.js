import AuthorTable from '../models/autores.model.js'
import BookTable from '../models/livros.model.js'

export async function insertAuthorRepositories(datas){
    const wasRegistered = await AuthorTable.create(datas)

    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}

export async function updateAuthorRepositories(datas){
    const hasUpdated = await AuthorTable.update(datas, {
        where:{
            autorid: datas.id
        }
    })

    if (hasUpdated.isNewRecord == undefined) {
        return true
    } else {
        return false
    }
}

export async function deletAuthorRepositories(id){
    const hasDeleted = await AuthorTable.destroy({
        where: {
            autorid: id
        }
    })

    if (hasDeleted.isNewRecord == undefined) {
        return true
    } else {
        return false
    }
}

export async function getAllBooks(){
    const allBooksDatas = await BookTable.findAll({
        attributes:['autorid']
    })
    
    return allBooksDatas;
}