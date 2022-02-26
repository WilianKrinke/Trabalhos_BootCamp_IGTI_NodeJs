import express from "express";
import { createOrderController } from "../controllers/createOrder.controller.js";

const route = express()

route.post('/createOrder', createOrderController)

export default route;