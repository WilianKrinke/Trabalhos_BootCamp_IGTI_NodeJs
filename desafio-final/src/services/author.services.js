import { deletAuthorRepositories, getAllBooks, getAuthorAllDatasRepositories, getAuthorDataRepositories, insertAuthorRepositories, updateAuthorRepositories } from "../repositories/author.repositories.js";
import { authorHaveBooksRegistered } from "../utils/authorHaveBooksRegistered.js";
import filterAllDatas from '../utils/filterAllDatas.js';

export async function insertAuthorServices(datas){
    const wasRegistered = await insertAuthorRepositories(datas)
    return wasRegistered;
}

export async function getAuthorAllDatasServices(){
    const authorAllDatas = await getAuthorAllDatasRepositories()
    const filteredAuthorDatas = filterAllDatas(authorAllDatas)
    return filteredAuthorDatas
}

export async function getAuthorDataServices(id){
    const authorData = await getAuthorDataRepositories(id)
    const filteredAuthorData = filterAllDatas(authorData)
    return filteredAuthorData
}

export async function updateAuthorServices(datas){
    const hasUpdated = await updateAuthorRepositories(datas)
    return hasUpdated;
}

export async function deletAuthorServices(id){
    const booksDatas = await getAllBooks()
    authorHaveBooksRegistered(booksDatas, id)    
    const hasDeleted = await deletAuthorRepositories(id)
    return hasDeleted;
}