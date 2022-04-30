import ClienteTable from '../models/clientes.model.js'
import VendasTable from '../models/vendas.model.js'

export async function insertClientRepositories(datas){
    const wasRegistered = await ClienteTable.create(datas)
    
    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}

export async function getAllDatasRepositories(){
    const allClientsDatas = await ClienteTable.findAll({
        attributes:['nome', 'email', 'telefone', 'endereco']
    });

    return allClientsDatas
}

export async function getClientDataRepositories(id){
    const clientDatas = await ClienteTable.findAll({
        attributes:['nome', 'email', 'telefone', 'endereco'],
        where:{clienteid: id}
    });

    return clientDatas;
}

export async function updateClientRepositories(datas){
    const hasUpdated = ClienteTable.update(datas, {
        where:{
            clienteid: datas.id
        }
    })

    if (hasUpdated.isNewRecord == undefined) {
        return true
    } else {
        return false
    }
}

export async function deleteClientRepositories(id){
    const hasDelete = ClienteTable.destroy({
        where: {
            clienteid: id
        }
    })

    if (hasDelete.isNewRecord == undefined) {
        return true
    } else {
        return false
    }
}

export async function getAllVendas(){
    const salesDatas = await VendasTable.findAll()
    return salesDatas;
}