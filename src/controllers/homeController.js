import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luis',
      sobrenome: 'Guilherme',
      email: 'failho42@gmail.com',
      idade: 17,
      peso: 80.00,
      altura: 1.78,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
