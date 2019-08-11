const path = require("path");
const router = require("express").Router();
// const authRoutes = require("./auth");
// const passport = require("passport");
const books = require("./book");
const user = require("./user");
// const authRoutes = require('./auth');

router.use("/books", books);
router.use("/user", user);


// If no API routes are hit, send the React app
router.use((request, response) => {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;