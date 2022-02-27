import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";

export async function getTopSellingProductsServices(){
    const allDatas = await getAllDatasJson()
    const arrayPedidos = allDatas.pedidos.filter(item => item.entregue === true)

    //const arrayPedidos1 = arrayPedidos.filter(item => item.produto === "Pizza a Moda")
    // const arrayPedidos2 = arrayPedidos.filter(item => item.produto === "Pizza Atum")
    // const arrayPedidos3 = arrayPedidos.filter(item => item.produto === "Pizza Calabresa")
    // const arrayPedidos4 = arrayPedidos.filter(item => item.produto === "Pizza Frango com Catupiry")
    // const arrayPedidos5 = arrayPedidos.filter(item => item.produto === "Pizza Muçarela")
    // const arrayPedidos6 = arrayPedidos.filter(item => item.produto === "Pizza Napolitana")
    // const arrayPedidos7 = arrayPedidos.filter(item => item.produto === "Pizza Pepperoni")

    // const object1 = {
    //     Pizza: "Pizza a Moda",
    //     qtd: arrayPedidos1.length
    // }

    // console.log(object1)
    // //Achar outra maneira
    
    

    
}