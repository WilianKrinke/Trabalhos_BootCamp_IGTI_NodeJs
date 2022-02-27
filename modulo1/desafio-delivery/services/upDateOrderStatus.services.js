import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";
import { upDateOrderRepository } from "../repositories/upDateOrder.repository.js";

export async function upDateOrderStatusServices (datasReceived){
    const allDatas = await getAllDatasJson()

    const orderIndex = allDatas.pedidos.findIndex(item => item.id === parseInt(datasReceived.id))

    if (orderIndex === -1) {
        throw new Error('Order Not Find')
    }

    const statusBool = datasReceived.status === 'true' ? true : false;
    allDatas.pedidos[orderIndex].entregue = statusBool;

    await upDateOrderRepository(allDatas)
}