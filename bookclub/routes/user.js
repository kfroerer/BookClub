const router = require("express").Router();
const userController = require("../controllers/user");

// Matches with "/user"

// may need to change some of these to auth routes
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.remove)

// Matches with "/user/books"
router
  .route("/books/all")
  .get(userController.findUsersBooks)

router
  .route("/books/unread")
  .get(userController.findUsersUnreadBooks)
  .delete(userController.deleteUserBook)

router
  .route("/books/read")
  .get(userController.findUsersReadBooks)
  .delete(userController.deleteUserBook)

module.exports = router;