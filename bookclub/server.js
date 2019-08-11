const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./models');
const routes = require('./routes')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);
const syncOptions = {force: false};

db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log( "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
    );
  })
})
