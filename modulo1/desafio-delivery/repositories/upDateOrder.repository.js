import { promises as fs } from 'fs';

const {writeFile} = fs
const allOrdersJson = 'pedidos.json'

export async function upDateOrderRepository(allDatas){
    await writeFile(allOrdersJson, JSON.stringify(allDatas, null, 2));
}