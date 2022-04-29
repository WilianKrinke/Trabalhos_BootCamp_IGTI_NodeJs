import ClienteTable from '../models/clientes.model.js'

export async function insertClientRepositories(datas){
    const wasRegistered = await ClienteTable.create(datas)
    console.log(wasRegistered)
}