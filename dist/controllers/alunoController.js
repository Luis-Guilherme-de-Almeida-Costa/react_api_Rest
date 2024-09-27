"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _aluno = require('../models/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _Fotos = require('../models/Fotos'); var _Fotos2 = _interopRequireDefault(_Fotos);

class HomeController {
  async index(req, res) {
    const alunos = await _aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Fotos2.default, 'id', 'DESC']],
      include: {
        model: _Fotos2.default,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const alunoCreate = await _aluno2.default.create({
          nome: 'Maria',
          sobrenome: 'Miranda',
          email: 'maria@gmail.com',
          idade: 23,
          peso: 57,
          altura: 1.70,
      });
      res.json(alunoCreate);
    } catch (error) {
      return res.status(400).json({
        errors: [error.errors[0].message],
      })
    }
  }

  async update(req, res) {
    try {
      const users = await _aluno2.default.findByPk(req.params.id);
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe', req.params.id],
        })
      }

      const novosDados = await users.update(req.body);

      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch(err) {
      return res.json(null);
    }
  }

  async show(req, res) {

  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não enviado.']
        })
      }

      const users = await _aluno2.default.findByPk(req.params.id);
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        })
      }

      await users.destroy();

      return res.json(users);
    } catch(err) {
      return res.status(400).json({
        errors: err.errors.map((err) => err.message)
        });
    }
  }
}

exports. default = new HomeController();
