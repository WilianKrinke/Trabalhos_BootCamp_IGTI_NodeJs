import express from "express";
import { testeFunction } from "../controllers/teste.controller.js";

const route = express()


route.get('/teste', testeFunction)

export default route;