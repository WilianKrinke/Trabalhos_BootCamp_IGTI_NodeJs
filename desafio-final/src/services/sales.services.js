import { getAllSalesByBookRepositories, getAllSalesByClientRepositories, getAllSalesDatasByAuthorRepositories, getAllSalesDatasRepositories, getSaleDatasRepositories, insertSaleRepositories } from "../repositories/sales.repositories.js";
import filterAllDatas from "../utils/filterAllDatas.js";
import { getBookValueAndStock } from "../utils/getBookValueAndStock.js";

export async function insertSaleService(datas){
    const bookValueAndStock = await getBookValueAndStock(datas.livroid)    
    if (bookValueAndStock.estoque === 0) throw new Error('Book without stock');

    const newDatas = {
        ...datas,
        valor: bookValueAndStock.valor
    }
    
    const wasRegistered = await insertSaleRepositories(newDatas)
    return wasRegistered
}

export async function getAllSalesDatasServices(){
    const allSalesDatas = await getAllSalesDatasRepositories()
    const filteredDatas = filterAllDatas(allSalesDatas)
    return filteredDatas
}

export async function getSaleDataServices(id){
    const saleDatas = await getSaleDatasRepositories(id)
    const filteredDatas = filterAllDatas(saleDatas)
    return filteredDatas
}

export async function getAllSalesByClientServices(id){
    const allSalesByClientDatas = await getAllSalesByClientRepositories(id)
    const filteredDatas = filterAllDatas(allSalesByClientDatas)
    return filteredDatas
}

export async function getAllSalesByBookServices(id){
    const allSalesByBookDatas = await getAllSalesByBookRepositories(id)
    const filteredDatas = filterAllDatas(allSalesByBookDatas)
    return filteredDatas
}

export async function getAllSalesByAuthorServices(id){
    const allSalesDatas = await getAllSalesDatasByAuthorRepositories(id)
    const filteredDatas = filterAllDatas(allSalesDatas)
    
    return filteredDatas
}