const router = require("express").Router();
const bookController = require("../controllers/book");

// Matches with "/book"
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/book/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.markAsRead)
  .delete(bookController.remove);

  // Matches with "/book/read"
router  
  .route("/read")
  .get(bookController.findReadBooks)

  // Matches with "/book/unread"
 router
  .route("/unread")
  .get(bookController.findUnreadBooks)

module.exports = router;