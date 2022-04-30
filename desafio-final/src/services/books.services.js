import { insertBooksRepositories } from "../repositories/book.repositories.js";

export async function insertBooksServices(datas){
    const wasRegistered = await insertBooksRepositories(datas)
    return wasRegistered;
}