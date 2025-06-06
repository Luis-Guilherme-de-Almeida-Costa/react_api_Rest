import User from '../models/User';

class UserController {
  // store --> coletar dados / POST
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message)
        });
    }
  }
  // index --> mostrar dados / GET
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch(err) {
      return res.json(null);
    }
  }
  // show --> params do navegador / GET
  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);

      const { id, nome, email } = users;

      return res.json({ id, nome, email });
    } catch(err) {
      return res.json(null);
    }
  }
  // update --> atualizar / GET
  async update(req, res) {
    try {
      const users = await User.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe', req.userId],
        })
      }

      const novosDados = await users.update(req.body);

      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch(err) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não enviado.']
        })
      }

      const users = await User.findByPk(req.params.id);
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

export default new UserController();
