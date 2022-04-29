import ClienteTable from '../models/clientes.model.js'

export async function insertClientRepositories(datas){
    const wasRegistered = await ClienteTable.create(datas)
    
    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}