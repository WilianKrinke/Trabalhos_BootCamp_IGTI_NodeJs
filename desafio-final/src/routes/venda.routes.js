import express from "express";
import { authorizationCheckNorm } from "../auth/authorizationCheckNorm.js";
import { authorizationCheckSup } from "../auth/authorizationCheckSup.js";
import {
  getAllSalesByAuthorController,
  getAllSalesByBookController,
  getAllSalesByClientController,
  getSaleController,
  insertSaleController,
} from "../controllers/sales.controller.js";

const router = express.Router();

router.post("/insert-sale", authorizationCheckNorm, insertSaleController);
router.get("/get-sales/:id?", authorizationCheckSup, getSaleController);
router.get(
  "/get-sales-by-client/:id",
  authorizationCheckNorm,
  getAllSalesByClientController
);
router.get(
  "/get-sales-by-book/:id",
  authorizationCheckSup,
  getAllSalesByBookController
);
router.get(
  "/get-sales-by-author/:id",
  authorizationCheckSup,
  getAllSalesByAuthorController
);

router.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send(err.message);
});

export default router;
