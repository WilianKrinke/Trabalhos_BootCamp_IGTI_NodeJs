export default function filterAllDatas(datas){ 
    const array = []
    
    for (const item of datas) {
        array.push(item.dataValues)
    }

    return array;
}