const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");

// registra um novo usuário 
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;


  // Validar dados
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Email/Senha inválidos"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  // Criar usuário
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
    isAdmin: false,
    experience: 0,
    level: 1
  }

  // Salvar usuário no BD 
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algum erro ocorreu ao salvar usuário"
      });
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

  User.findOne({
    where: { email: email }
  })
    .then(async (data) => {
      const validPassword = await bcrypt.compare(password, data.password);
      if (validPassword) {
        res.send("UHU, você está logado!");
      } else {
        res.send("Usuário/Senha inválidos");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Email/Senha Inválidos"
      })
    });
};

// Atualiza um usuário pelo ID enviado no req
exports.update = (req, res) => {

};

// Deleta o usuário pelo ID
exports.delete = (req, res) => {

};

// Deleta todos os usuários do BD
exports.deleteAll = (req, res) => {

};
