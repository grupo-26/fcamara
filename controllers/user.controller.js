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

  //const hashedPassword = await bcrypt.hash(password, 12);

  // Criar usuário
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    pontosgeral: 0,
    progcurso1: 0,
    progcurso2: 0,
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


exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving with id=" + id
      });
    });
};


// Encontra todos os cursos no BD
exports.findAll = (req, res) => {
  const email = req.body.email;
  let condition = email ? { email: { [Op.ilike]: `%${email}` } } : null;

  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algum erro ocorreu ao pesquisar os Users"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};


// Deleta o usuário pelo ID
exports.delete = (req, res) => {

};

// Deleta todos os usuários do BD
exports.deleteAll = (req, res) => {

};
