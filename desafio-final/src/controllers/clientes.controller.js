import { deleteClientService, getAllClientsService, getClientDataService, insertClientService, updateClientService } from "../services/cliente.services.js";

export async function insertClientController(req, res, next){
    try {
        const datas = req.body;
            
        if (!datas.nome || !datas.email || !datas.telefone || !datas.endereco || !datas.senha) {
            throw new Error('Fill all fields')
        }

        const wasRegistered = await insertClientService(datas)

        if (wasRegistered) {
            res.status(200).send('Customer has been registered')
        } else {
            throw new Error('Customer has not been registered')
        }

    } catch (error) {
        next(error)
    }
}

export async function getClientController(req, res, next){
    try {
        const {id} = req.params;       

        if (id === undefined) {
            const filteredClientDatas = await getAllClientsService()
            res.status(200).send(JSON.stringify(filteredClientDatas))
        } else {
            const clientData = await getClientDataService(id)
            res.status(200).send(JSON.stringify(clientData))
        }
        
    } catch (error) {
        next(error)
    }
}

export async function updateClientController(req, res, next){
    try {
        const datas = req.body;
            
        if (!datas.id || !datas.nome || !datas.email || !datas.telefone || !datas.endereco || !datas.senha) {
            throw new Error('Fill all fields')
        }

        const hasUpdated = await updateClientService(datas)
       
        if (hasUpdated) {
            res.status(200).send('Client has been updated')            
        } else {
            throw new Error("Client has not been updated")
        }

    } catch (error) {
        next(error)
    }
}

export async function deleteClientController(req, res, next){
    try {
        const {id} = req.params;
        const hasDeleted = await deleteClientService(id)

        if (hasDeleted) {
            res.status(200).send('Customer has been deleted')            
        } else{
            throw new Error('Customer has not been deleted')
        }
        
    } catch (error) {
        next(error)
    }
}