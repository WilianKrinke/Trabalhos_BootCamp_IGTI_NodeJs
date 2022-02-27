import express from "express";
import { createOrderController } from "../controllers/createOrder.controller.js";
import { upDateDeliveryStatusController } from "../controllers/upDateDeliveryStatus.controller.js";
import { updateOrderController } from "../controllers/updateOrder.controller.js";

const route = express.Router()

route.post('/create-order', createOrderController)
route.put('/update-order/:id', updateOrderController)
route.patch('/update-order-status/:id/:status', upDateDeliveryStatusController)

export default route;