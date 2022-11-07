const express = require("express");
const app = express();
const cors = require("cors")
// const bodyParser = require("body-parser")
const path = require("path");
const session = require("express-session");
const sessionOptions = {
  secret: "mvp",
  resave: false,
  saveUnitialized: false
}

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(session(sessionOptions));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models")

db.sequelize.sync()
  .then(() => {
    console.log("Synced DB");
  })
  .catch((err) => {
    console.log("Failed to sync DB. " + err.message);
  })

const userRouter = require("./routes/user.route.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servindo na porta: ${PORT}`);
})
