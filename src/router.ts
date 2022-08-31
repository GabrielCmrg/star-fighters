import { Router } from 'express';

import { validateBody } from './middlewares';
import { makeBattle } from './controllers';

const router = Router();

router.post('/battle', validateBody, makeBattle);

export default router;
