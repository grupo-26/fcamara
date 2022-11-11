const db = require("../models");
const Course = db.courses;
const Op = db.Sequelize.Op;

// Cria um novo curso 
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "O curso precisa de um título"
    });
    return;
  }

  const course = {
    title: req.body.title,
    stack: req.body.stack,
    published: req.body.published ? req.body.published : false
  }

  Course.create(course)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algum erro ocorreu ao salvar Curso"
      });
    })
};

// Encontra todos os cursos no BD
exports.findAll = (req, res) => {
  const title = req.body.title;
  let condition = title ? { title: { [Op.ilike]: `%${title}` } } : null;

  Course.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algum erro ocorreu ao pesquisar os cursos"
      });
    });
};

/*
// Encontra um curso só baseado numa ID
exports.findOne = (req, res) => {

};

// Atualiza um curso pelo ID enviado no req
exports.update = (req, res) => {

};

// Deleta o curso pelo ID
exports.delete = (req, res) => {

};

// Deleta todos os cursos do BD
exports.deleteAll = (req, res) => {

};

// Acha todos os cursos publicados
exports.findAllPublished = (req, res) => {

};
*/