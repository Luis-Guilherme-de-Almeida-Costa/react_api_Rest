import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3,255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres'
            }
          }
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3,255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres'
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
             msg: "E-mail já existe",
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido. '
            }
          }
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Numero inválido. '
            }
          }
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Numero inválido. '
            }
          }
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Numero inválido. '
            }
          }
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Fotos, { foreignKey: 'alunos_id' })
  }
}
