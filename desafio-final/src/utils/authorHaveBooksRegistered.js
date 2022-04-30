export function authorHaveBooksRegistered(booksDatas, id){   
    for (const item of booksDatas) {
        if (item.dataValues.autorid == id) {
            throw new Error('Author was not deleted, as there are associated books')
        }
    }
}