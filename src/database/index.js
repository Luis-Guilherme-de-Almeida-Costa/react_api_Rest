import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/aluno';
import Users from '../models/User';
import Fotos from '../models/Fotos';

const models = [Aluno, Users, Fotos];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));