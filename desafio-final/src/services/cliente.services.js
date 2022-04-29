import { insertClientRepositories } from "../repositories/cliente.repositories.js";

export async function insertClientService(datas){
    const wasRegistered = await insertClientRepositories(datas)
    return wasRegistered;
}