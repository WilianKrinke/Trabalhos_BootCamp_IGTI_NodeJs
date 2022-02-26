import { createOrderRepository } from "../repositories/createOrder.repository.js";
import { getNextId } from "../repositories/nextId.repository.js";
import getTime from "../utils/getTime.js";

export async function createOrderServices(data){
    const {cliente, produto, valor} = data
    const id = await getNextId()
    const timestamp = getTime()
    const isDeliveredDefault = false

    const objectData = {
        id,
        cliente,
        produto,
        valor,
        entregue: isDeliveredDefault,
        timestamp
    }

    await createOrderRepository(objectData)
}