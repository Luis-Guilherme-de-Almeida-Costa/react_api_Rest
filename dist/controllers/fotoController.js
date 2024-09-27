"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Fotos = require('../models/Fotos'); var _Fotos2 = _interopRequireDefault(_Fotos);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

class fotoController {
    store(req, res) {
      return upload(req,  res, async (err) => {
        if(err) {
          return res.status(400).json({
            errors: [err.code],
          })
        }

        const { filename, originalname } = req.file;
        
        const { alunos_id } = req.body;
        
        try {
          const foto = await _Fotos2.default.create({
            filename,
            originalname,
            alunos_id,
          });
          return res.json(foto);
        } catch (error) {
          return res.status(400).json({ errors: [error] })
        }
        
      });
    }
  }
  
exports. default = new fotoController();  