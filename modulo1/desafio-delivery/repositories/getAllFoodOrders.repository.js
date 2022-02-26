import { promises as fs } from 'fs';

const {readFile, writeFile} = fs
const allOrdersJson = 'pedidos.json'

export async function getAllFoodOrders(){
    const {pedidos} = JSON.parse(await readFile(allOrdersJson))
    return pedidos;
}

export async function getAllDatasJson(){
    const allDatasJson = JSON.parse(await readFile(allOrdersJson))
    return allDatasJson;
}