import multer from 'multer';

import multerConfig from '../config/multerConfig';
import Fotos from '../models/Fotos';

const upload = multer(multerConfig).single('foto');

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
          const foto = await Fotos.create({
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
  
export default new fotoController();  