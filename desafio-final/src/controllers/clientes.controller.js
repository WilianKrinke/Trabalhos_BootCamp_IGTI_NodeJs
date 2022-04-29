import { insertClientService } from "../services/cliente.services.js";

export async function insertClientController(req, res, next){
    try {
        const datas = req.body;
            
        if (!datas.nome || !datas.email || !datas.telefone || !datas.endereco || !datas.senha) {
            throw new Error('Preencha todos os campos')
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

export function getClientController(req, res, next){

}

export function updateClientController(req, res, next){

}

export function deleteClientController(req, res, next){

}