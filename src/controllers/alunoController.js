import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const alunoCreate = await Aluno.create({
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
      const users = await Aluno.findByPk(req.params.id);
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

      const users = await Aluno.findByPk(req.params.id);
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

export default new HomeController();
