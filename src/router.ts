import { Router } from 'express';

import { validateBody } from './middlewares';
import { makeBattle, getRanking } from './controllers';

const router = Router();

router.post('/battle', validateBody, makeBattle);
router.get('/ranking', getRanking);

export default router;
