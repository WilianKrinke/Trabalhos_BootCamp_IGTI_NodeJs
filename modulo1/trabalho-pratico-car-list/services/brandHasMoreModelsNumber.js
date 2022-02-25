function compareModels(a, b){
    return b.models.length - a.models.length
}

export default function brandHasMoreModelsNumber(data, qtd){
    let arrayFormated = [];
    data.sort(compareModels)

    const newDatas = data.slice(0, qtd)

    newDatas.forEach(element => {
        arrayFormated.push({
            brand: element.brand, 
            models: element.models.length
        })
    });

    return arrayFormated;
}