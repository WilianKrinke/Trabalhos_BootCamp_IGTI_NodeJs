import express from "express";
import { authorizationCheckNorm } from "../auth/authorizationCheckNorm.js";
import { authorizationCheckSup } from "../auth/authorizationCheckSup.js";
import {
  deleteBookController,
  deleteBookInfoController,
  deleteBookReviewController,
  getBooksByAuthorController,
  getBooksController,
  insertBookController,
  insertBookInfoController,
  insertBookReviewController,
  updateBookController,
  updateBookInfoController,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/insert-book", authorizationCheckSup, insertBookController);
router.post(
  "/insert-book-info",
  authorizationCheckSup,
  insertBookInfoController
);
router.post(
  "/insert-book-review",
  authorizationCheckNorm,
  insertBookReviewController
);
router.get("/get-book/:id?", authorizationCheckNorm, getBooksController);
router.get(
  "/get-book-by-author/:autoridparam",
  authorizationCheckNorm,
  getBooksByAuthorController
);
router.put("/update-book", authorizationCheckSup, updateBookController);
router.put(
  "/update-info-book",
  authorizationCheckSup,
  updateBookInfoController
);
router.delete("/delete-book/:id", authorizationCheckSup, deleteBookController);
router.delete(
  "/delete-info/:id",
  authorizationCheckSup,
  deleteBookInfoController
);
router.delete(
  "/delete-book-review/:id",
  authorizationCheckSup,
  deleteBookReviewController
);

router.use((err, req, res, next) => {
  console.log(err.message);
  res.status(400).send(err.message);
});

export default router;
