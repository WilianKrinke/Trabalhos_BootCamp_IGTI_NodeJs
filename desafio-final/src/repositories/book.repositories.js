import mongoClientFunction from '../connection/nosql.db.js'
import BooksTable from '../models/livros.model.js'

export async function insertBooksRepositories(datas){
    const wasRegistered = await BooksTable.create(datas)

    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}

export async function insertBookInfoRepositories(data){
    const mongoClient = mongoClientFunction()
    try {
        await mongoClient.connect()
        await mongoClient
            .db('igti-desafio')
            .collection('store-igti-books')
            .insertOne(data)
        
    } catch (error) {
        console.log(error.message)
        throw new Error('Book info has not been registered')
    } finally {
        mongoClient.close();
        return true
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

export async function getBookByAuthorRepositories(autoridparam){
    const bookByAuthor = await BooksTable.findAll({
        attributes:['nome', 'valor', 'valor', 'autorid'],
        where:{autorid: autoridparam}
    })

    return bookByAuthor;
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

export async function updateBookInfoRepositories(data){
    const mongoClient = mongoClientFunction()
    try {
        await mongoClient.connect()
        await mongoClient
            .db('igti-desafio')
            .collection('store-igti-books')
            .updateOne(
                {livroid: data.livroid},
                {$set: {
                    ...data
                }}
            )
        
    } catch (error) {
        console.log(error.message)
        throw new Error('Book info has not been updated')
    } finally {
        mongoClient.close();
        return true
    }
}

export async function deleteBookRepositories(id){
    const hasDeleted = await BooksTable.destroy({
        where: {livroid: id}
    })

    return hasDeleted;
}

export async function deleteBookInfoRepositories(id){
    const mongoClient = mongoClientFunction()
    try {
        await mongoClient.connect()
        await mongoClient
            .db('igti-desafio')
            .collection('store-igti-books')
            .deleteOne({livroid: parseInt(id)})
        
    } catch (error) {
        console.log(error.message)
        throw new Error('Book info has not been updated')
    } finally {
        mongoClient.close();
        return true
    }
}