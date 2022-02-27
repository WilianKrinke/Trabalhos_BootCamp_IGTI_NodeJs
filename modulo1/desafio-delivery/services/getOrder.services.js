import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";

export async function getOrderService(id){
    const allDatas = await getAllDatasJson()

    const orderSelected = allDatas.pedidos.filter(item => item.id === parseInt(id))
    return orderSelected;
}