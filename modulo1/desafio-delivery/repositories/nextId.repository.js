import { promises as fs } from 'fs';

const {readFile} = fs
const allOrdersJson = 'pedidos.json'

export async function getNextId(){
    const {nextId} = JSON.parse(await readFile(allOrdersJson))
    return nextId
}