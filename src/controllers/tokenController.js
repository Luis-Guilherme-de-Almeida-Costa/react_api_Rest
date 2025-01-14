import User from '../models/User';
import jwt from 'jsonwebtoken';

class Token {
  async index(req, res) {
    const { email = '', password = ''} = req.body;

    if(!email || !password) {
      return res.status(401).json({
        errors: ['Ou seu email, ou sua senha está vazia.']
      })
    }

    const user = await User.findOne({ where: { email } })

    if(!user) {
      return res.status(400).json({
        errors: ['Usuário não existe']
      })
    }

    if(!(await user.isValidPassword(password))) {
      return res.status(400).json({
        errors: ['Senha inválida.']
      })
    }

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new Token();
