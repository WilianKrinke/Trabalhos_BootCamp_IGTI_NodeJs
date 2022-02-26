import { promises as fs } from 'fs';
import { getAllDatasJson } from './getAllFoodOrders.repository.js';

const {writeFile} = fs
const allOrdersJson = 'pedidos.json'

export async function createOrderRepository(dataToCreateOrder){
    const allDatas = await getAllDatasJson()
    
    allDatas.nextId++
    allDatas.pedidos.push(dataToCreateOrder)

    await writeFile(allOrdersJson, JSON.stringify(allDatas, null, 2))
}