// eslint-disable-next-line
import { Router } from 'express';
import tokenController from '../controllers/tokenController';

// Rotas principais
const router = new Router();

router.post('/', tokenController.index)

export default router;
