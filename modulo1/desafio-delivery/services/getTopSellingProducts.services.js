import { getAllDatasJson } from "../repositories/getAllFoodOrders.repository.js";

export async function getTopSellingProductsServices(){
    const allDatas = await getAllDatasJson()
    const arrayPedidos = allDatas.pedidos.filter(item => item.entregue === true)

    const arrayPedidos1 = arrayPedidos.filter(item => item.produto === "Pizza a Moda")
    const arrayPedidos2 = arrayPedidos.filter(item => item.produto === "Pizza Atum")
    const arrayPedidos3 = arrayPedidos.filter(item => item.produto === "Pizza Calabresa")
    const arrayPedidos4 = arrayPedidos.filter(item => item.produto === "Pizza Frango com Catupiry")
    const arrayPedidos5 = arrayPedidos.filter(item => item.produto === "Pizza Muçarela")
    const arrayPedidos6 = arrayPedidos.filter(item => item.produto === "Pizza Napolitana")
    const arrayPedidos7 = arrayPedidos.filter(item => item.produto === "Pizza Pepperoni")

    const arrayTopOrders = [
        {
            Pizza: "Pizza a Moda",
            qtd: arrayPedidos1.length
        },
        {
            Pizza: "Pizza Atum",
            qtd: arrayPedidos2.length
        },
        {
            Pizza: "Pizza Calabresa",
            qtd: arrayPedidos3.length
        },
        {
            Pizza: "Pizza Frango com Catupiry",
            qtd: arrayPedidos4.length
        },
        {
            Pizza: "Pizza Muçarela",
            qtd: arrayPedidos5.length
        },
        {
            Pizza: "Pizza Napolitana",
            qtd: arrayPedidos6.length
        },
        {
            Pizza: "Pizza Pepperoni",
            qtd: arrayPedidos7.length
        },
    ]

    arrayTopOrders.sort((a,b) => b.qtd - a.qtd)

    return arrayTopOrders;
}