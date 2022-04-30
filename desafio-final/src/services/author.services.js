import { deletAuthorRepositories, getAllBooks, insertAuthorRepositories, updateAuthorRepositories } from "../repositories/author.repositories.js";
import { authorHaveBooksRegistered } from "../utils/authorHaveBooksRegistered.js";

export async function insertAuthorServices(datas){
    const wasRegistered = await insertAuthorRepositories(datas)
    return wasRegistered;
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