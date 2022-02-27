import express from "express";
import { createOrderController } from "../controllers/createOrder.controller.js";
import { deleteOrderController } from "../controllers/deleteOrder.controller.js";
import { getOrderController } from "../controllers/getOrder.controller.js";
import { getTotalValuesByClientController } from "../controllers/getTotalValuesByClient.controller.js";
import { upDateDeliveryStatusController } from "../controllers/upDateDeliveryStatus.controller.js";
import { updateOrderController } from "../controllers/updateOrder.controller.js";

const route = express.Router()

route.get('/get-order/:id', getOrderController)
route.get('/get-total-values-orders-by-client/:clientName', getTotalValuesByClientController)
route.post('/create-order', createOrderController)
route.put('/update-order/:id', updateOrderController)
route.patch('/update-order-status/:id/:status', upDateDeliveryStatusController)
route.delete('/delete-order/:id', deleteOrderController)

export default route;