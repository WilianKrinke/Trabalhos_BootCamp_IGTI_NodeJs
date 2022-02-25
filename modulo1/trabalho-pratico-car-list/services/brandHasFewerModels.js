function compareModels(a, b){
    return a.models.length - b.models.length
}

export default function brandHasFewerModels(data){
   data.sort(compareModels)   
   return data;
}