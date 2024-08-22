// eslint-disable-next-line
import { Router } from 'express';
import alunoController from '../controllers/alunoController';

// Rotas principais
const router = new Router();
router.get('/', alunoController.index);

// Rotas para contatos
export default router;
