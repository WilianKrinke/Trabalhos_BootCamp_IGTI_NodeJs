import { insertAuthorRepositories, updateAuthorRepositories } from "../repositories/author.repositories.js";

export async function insertAuthorServices(datas){
    const wasRegistered = await insertAuthorRepositories(datas)
    return wasRegistered;
}

export async function updateAuthorServices(datas){
    const hasUpdated = await updateAuthorRepositories(datas)
    return hasUpdated;
}