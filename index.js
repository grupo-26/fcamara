const express = require("express");
const app = express();
const cors = require("cors")
// const bodyParser = require("body-parser")
const path = require("path");
const userPageRouter = require("./routes/user.route.js");

var corsOptions = {
  origin: "http://localhost:8081"
}

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

// Definindo pasta de views, a view engine e a pasta de arquivos estáticos
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const userRouter = require("./api/user.route.js")(app);

app.use("/", userPageRouter);

app.get("/", (_, res) => {
  res.render("home");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servindo na porta: ${PORT}`);
})
