import { insertSaleRepositories } from "../repositories/sales.repositories.js";
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
