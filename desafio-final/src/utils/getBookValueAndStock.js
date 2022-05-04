import BooksTable from '../models/livros.model.js';
import filterAllDatas from './filterAllDatas.js';

export async function getBookValueAndStock(idBook){
    const bookValueData = await BooksTable.findAll({
        attributes:['valor', 'estoque'],
        where: {
            livroid: idBook
        }
    })
    
    const filteredBookData = filterAllDatas(bookValueData)
    return filteredBookData[0];
}