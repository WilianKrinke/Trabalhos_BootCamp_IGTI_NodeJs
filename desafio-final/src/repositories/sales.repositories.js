import BookTable from '../models/livros.model.js'
import VendasTable from '../models/vendas.model.js'

export async function insertSaleRepositories(datas){
    const wasRegistered = await VendasTable.create(datas)

    if (wasRegistered.isNewRecord == false) {
        return true
    } else {
        return false
    }
}

export async function getAllSalesDatasRepositories(){
    const allSalesDatas = await VendasTable.findAll({
        include:{
            model: BookTable,
            attributes: ['livroid', 'nome', 'valor', 'estoque', 'autorid']
        }
    })
    
    return allSalesDatas    
}

export async function getSaleDatasRepositories(id){
    const salesDatas = await VendasTable.findAll({
        where:{vendaid: id},
        include:{
            model: BookTable,
            attributes: ['livroid', 'nome', 'valor', 'estoque', 'autorid']
        }
    })
    
    return salesDatas 
}

export async function getAllSalesByClientRepositories(id){
    const salesDatasByClient = await VendasTable.findAll({
        where:{clienteid: id},
    })
    
    return salesDatasByClient
}

export async function getAllSalesByBookRepositories(id){
    const salesDatasByBook = await VendasTable.findAll({
        where:{livroid: id},
    })
    
    return salesDatasByBook
}

export async function getAllSalesDatasByAuthorRepositories(id){
    const allSalesDatasByAuthor = await VendasTable.findAll({
        include:{
            model: BookTable,
            attributes: ['livroid', 'nome', 'valor', 'estoque', 'autorid'],
            where: {autorid: id}
        }
    })
    
    return allSalesDatasByAuthor    
}