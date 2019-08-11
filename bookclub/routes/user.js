const router = require("express").Router();
const userController = require("../controllers/user");

// Matches with "/user"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/house/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;