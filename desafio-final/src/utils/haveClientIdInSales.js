export function clientIdInSales(salesDatasArr, clientId){
    for (const item of salesDatasArr) {
        if (item.dataValues.clienteid == clientId) {
            throw new Error('Customer was not deleted, as there are associated sales')
        }
    }    
}