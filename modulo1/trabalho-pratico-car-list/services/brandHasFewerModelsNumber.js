function compareModels(a, b){
    return a.models.length - b.models.length
}

export default function brandHasFewerModelsNumber(data, qtd){
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