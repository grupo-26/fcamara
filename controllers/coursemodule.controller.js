const db = require("../models");
const CourseModule = db.coursemodule;
const Op = db.Sequelize.Op;

// Cria um novo modulo 
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "O curso precisa de um título"
    });
    return;
  }

  const mod = {
    title: req.body.title,
    stack: req.body.stack,
    modsigla: req.body.modsigla,
    published: req.body.published ? req.body.published : false
  }

  CourseModule.create(mod)
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
  //const id = req.body.id;
  //let condition = id;
  //let condition = id ? { id: { [Op.eq]: `%${id}` } } : 2;

  CourseModule.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algum erro ocorreu ao pesquisar os cursos"
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  CourseModule.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};


/*
exports.findOne = (req, res) => {
  const stack = req.params.stack;

  CourseModule.findByPk(stack)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${stack}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + stack
      });
    });
};
*/


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