import VendasTable from '../models/vendas.model.js'

export async function insertSaleRepositories(datas){
    const wasRegistered = await VendasTable.create(datas)

    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}