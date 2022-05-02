import { allBookDatasRepositories, bookDatasRepositories, deleteBookInfoRepositories, deleteBookRepositories, getBookByAuthorRepositories, insertBookInfoRepositories, insertBookReviewRepositories, insertBooksRepositories, updateBookInfoRepositories, updateBooksRepositories } from "../repositories/book.repositories.js";
import { getAllSales } from "../repositories/cliente.repositories.js";
import bookHaveSales from "../utils/bookHaveSales.js";
import filterAllDatas from "../utils/filterAllDatas.js";

export async function insertBooksServices(datas){
    const wasRegistered = await insertBooksRepositories(datas)
    return wasRegistered;
}

export async function insertBookInfoServices(data){
    const wasRegisteredInfo = await insertBookInfoRepositories(data)
    return wasRegisteredInfo
}

export async function insertBookReviewService(datas){
    const wasRegisteredInfo = await insertBookReviewRepositories(datas)
    return wasRegisteredInfo
}

export async function allBookDatasServices(){
    const allBookDatas = await allBookDatasRepositories()
    const filteredBookDatas = filterAllDatas(allBookDatas)
    return filteredBookDatas;
}

export async function bookDataServices(id){
    const bookData = await bookDatasRepositories(id)
    const filteredBookData = filterAllDatas(bookData)
    return filteredBookData;
}

export async function getBookByAuthorServices(autoridparam){
    const booksByAuthor = await getBookByAuthorRepositories(autoridparam)

    const filteredBookByAuthorData = filterAllDatas(booksByAuthor)
    return filteredBookByAuthorData;
}

export async function updateBooksServices(datas){
    const hasUpdated = await updateBooksRepositories(datas)
    return hasUpdated
}

export async function updateBookInfoService(data){
    const hasUpdated = await updateBookInfoRepositories(data)
    return hasUpdated
}

export async function deleteBookService(id){
    const salesDatas = await getAllSales()
    bookHaveSales(salesDatas, id)
    
    const hasDeleted = await deleteBookRepositories(id)
    return hasDeleted;
}

export async function deleteBookInfoService(id){
    const hasDeleted = await deleteBookInfoRepositories(id)
    return hasDeleted;
}