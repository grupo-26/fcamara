const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const pgp = require("pg-promise");
const db = pgp("postgres://<username>:<password>@<host>:<port>/database")
const path = require("path");
const userRouter = require("./routes/users");

const server = {
  port: 4040,
};

app.use(cors());
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRouter);

app.get("/", (req, res) => {
  // res.send("Olá, FCamara!");
  res.render("home");
})

app.listen(server.port, () => {
  console.log("Hospedado na porta 8000 - Acesse: localhost:8000")
})
