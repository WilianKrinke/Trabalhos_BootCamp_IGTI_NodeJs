import { insertClientRepositories } from "../repositories/cliente.repositories.js";

export function insertClientService(datas){
    const wasRegistered = insertClientRepositories(datas)
}