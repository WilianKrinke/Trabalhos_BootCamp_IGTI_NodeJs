export default function bookHaveSales(datas, id){
    for (const item of datas) {
        if (item.dataValues.vendaid == id) {
            throw new Error('Books was not deleted, as there are associated sales')
        }
    }
}