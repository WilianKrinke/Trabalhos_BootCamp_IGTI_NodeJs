import express from "express";
import { createOrderController } from "../controllers/createOrder.controller.js";
import { updateOrderController } from "../controllers/updateOrder.controller.js";

const route = express.Router()

route.post('/create-order', createOrderController)
route.put('/update-order/:id', updateOrderController)

export default route;