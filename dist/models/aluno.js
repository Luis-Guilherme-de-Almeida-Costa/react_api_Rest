"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3,255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres'
            }
          }
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3,255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres'
            }
          }
        },
        email: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Numero inválido. '
            }
          }
        },
        peso: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Numero inválido. '
            }
          }
        },
        altura: {
          type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
