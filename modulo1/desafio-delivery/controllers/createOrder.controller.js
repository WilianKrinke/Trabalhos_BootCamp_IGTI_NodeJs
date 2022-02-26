
export function createOrderController(req, res, next){
    try {
        //const {cliente, produto, valor} = req.body
        const data = req.body
        console.log(data)

       
       
        console.log('Chegou requisição')
        res.status(200).send('Okay')
    } catch (error) {
        console.log(error.message)
    }
}