import { deleteClientRepositories, getAllDatasRepositories, getAllVendas, getClientDataRepositories, insertClientRepositories, updateClientRepositories } from "../repositories/cliente.repositories.js";
import filterAllDatas from "../utils/filterAllDatas.js";
import { clientIdInSales } from "../utils/haveClientIdInSales.js";

export async function insertClientService(datas){
    const wasRegistered = await insertClientRepositories(datas)
    return wasRegistered;
}

export async function getAllClientsService(){
    const allClientsData = await getAllDatasRepositories();
    
    const filteredClientDatas = filterAllDatas(allClientsData)
    return filteredClientDatas
}

export async function getClientDataService(id){
    const clientDatas = await getClientDataRepositories(id)

    const filteredClientData = filterAllDatas(clientDatas)
    return filteredClientData;
}

export async function updateClientService(datas){
    const hasUpdated = await updateClientRepositories(datas)
    return hasUpdated
}

export async function deleteClientService(id){    
    const salesDatas = await getAllVendas()
    const haveClientInSales = clientIdInSales(salesDatas, id)

    if(haveClientInSales) return false;
     
    const hasDelete = await deleteClientRepositories(id)
    return hasDelete;
}