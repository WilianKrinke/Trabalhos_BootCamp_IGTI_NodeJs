import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";

export async function getTotalValuesByClientServices({clientName}){
    const allDatas = await getAllDatasJson()

    const arrayPedidos = allDatas.pedidos.filter(item => item.entregue === true)
    const arrayPedidosClient = arrayPedidos.filter(item => item.cliente === clientName)

    const sumPedidosClient = arrayPedidosClient
        .map(item => item.valor)
        .reduce((prevItem, currItem) => prevItem + currItem)

    return sumPedidosClient; 
}