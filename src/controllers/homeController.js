import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    res.json('index');
  }
}

export default new HomeController();
