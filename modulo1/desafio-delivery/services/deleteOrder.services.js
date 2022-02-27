import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";
import { upDateOrderRepository } from "../repositories/upDateOrder.repository.js";

export async function deleteOrderServices(id){
    const allDatas = await getAllDatasJson()

    allDatas.pedidos = allDatas.pedidos.filter(item => item.id !== parseInt(id))

    await upDateOrderRepository(allDatas) 
}