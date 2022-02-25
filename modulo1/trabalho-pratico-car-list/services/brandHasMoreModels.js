function compareModels(a, b){
    return b.models.length - a.models.length
}

export default function brandHasMoreModels(data){
   data.sort(compareModels)   
   return data;
}