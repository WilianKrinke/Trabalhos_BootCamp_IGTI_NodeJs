import ClienteTable from '../models/clientes.model.js';
import filterAllDatas from './filterAllDatas.js';

export async function getUser(username){
    const userValueData = await ClienteTable.findAll({
        attributes:['senha'],
        where: {
            nome: username
        }
    })
    
    
    const filteredUserData = filterAllDatas(userValueData)
    return filteredUserData[0].senha

}