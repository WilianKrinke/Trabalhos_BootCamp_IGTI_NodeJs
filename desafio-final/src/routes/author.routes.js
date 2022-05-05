import express from "express";
import { authorizationCheckSup } from "../auth/authorizationCheckSup.js";
import {
  deleteAuthorController,
  getAuthorController,
  insertAuthorController,
  updateAuthorController,
} from "../controllers/author.controller.js";

const router = express.Router();

router.post("/insert-author", authorizationCheckSup, insertAuthorController);
router.get("/get-author/:id?", authorizationCheckSup, getAuthorController);
router.put("/update-author", authorizationCheckSup, updateAuthorController);
router.delete(
  "/delete-author/:id",
  authorizationCheckSup,
  deleteAuthorController
);

router.use((err, req, res, next) => {
  console.log(err.message);
  res.status(400).send(err.message);
});

export default router;
