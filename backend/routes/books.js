const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const BookController = require("../controllers/bookController");

const router = express.Router();

router.post("/", protect, upload.single("coverImage"), BookController.addBook);
router.put(
  "/:id",
  protect,
  upload.single("coverImage"),
  BookController.editBook
);
router.delete("/:id", protect, BookController.deleteBook);
router.get("/", BookController.getBooks);
router.get("/:id", BookController.getBookById);

module.exports = router;
