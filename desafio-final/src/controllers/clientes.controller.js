import { insertClientService } from "../services/cliente.services.js";

export function insertClientController(req, res, next){
    try {
        const datas = req.body;
            
        if (!datas.nome || !datas.email || !datas.telefone || !datas.endereco || !datas.senha) {
            throw new Error('Preencha todos os campos')
        }

        const wasRegistered = insertClientService(datas)

        res.status(200).send(datas)

    } catch (error) {
        next(error)
    }

    
}

export function getClientController(req, res, next){

}

export function updateClientController(req, res, next){

}

export function deleteClientController(req, res, next){

}