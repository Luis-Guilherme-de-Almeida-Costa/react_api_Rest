import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/aluno';
import Users from '../models/User';

const models = [Aluno, Users];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
