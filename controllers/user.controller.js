const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Cria um novo usuário 
exports.create = (req, res) => {
  // Validar dados
  console.log(req.body);
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Email/Senha inválidos"
    });
  }

  // Criar usuário
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
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

// Encontra todos os usuários no BD
exports.findAll = (req, res) => {

};

// Encontra um usuário só baseado numa ID??
exports.findOne = (req, res) => {

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
