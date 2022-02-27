import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";

export async function getTotalValuesByProductServices({productName}){
    const allDatas = await getAllDatasJson()

    const arrayPedidos = allDatas.pedidos.filter(item => item.entregue === true)
    const arrayPedidosProduct = arrayPedidos.filter(item => item.produto === productName)

    const sumPedidosProduct = arrayPedidosProduct
        .map(item => item.valor)
        .reduce((prevItem, currItem) => prevItem + currItem)

    return sumPedidosProduct;
}