import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";
import { upDateOrderRepository } from "../repositories/upDateOrder.repository.js";

export async function upDateOrderServices(datasReceived){
    const allDatas = await getAllDatasJson()
    const orderIndex = allDatas.pedidos.findIndex(item => item.id === datasReceived.id)

    if (orderIndex === -1) {
        throw new Error('Order Not Find')
    }

    allDatas.pedidos[orderIndex].cliente = datasReceived.cliente;
    allDatas.pedidos[orderIndex].produto = datasReceived.produto;
    allDatas.pedidos[orderIndex].valor = datasReceived.valor;
    allDatas.pedidos[orderIndex].entregue = datasReceived.entregue;

    await upDateOrderRepository(allDatas) 
}