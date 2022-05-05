import express from "express";
import { authorizationCheckNorm } from "../auth/authorizationCheckNorm.js";
import { authorizationCheckSup } from "../auth/authorizationCheckSup.js";
import {
  deleteClientController,
  getClientController,
  insertClientController,
  updateClientController,
} from "../controllers/clientes.controller.js";

const router = express.Router();

router.post("/insert-client", authorizationCheckSup, insertClientController);
router.get("/get-client/:id?", authorizationCheckSup, getClientController);
router.put("/update-client", authorizationCheckNorm, updateClientController);
router.delete(
  "/delete-client/:id",
  authorizationCheckSup,
  deleteClientController
);

router.use((err, req, res, next) => {
  console.log(err.message);
  res.status(400).send(err.message);
});

export default router;
