import { Router } from 'express';

import { validateBody } from './middlewares';

const router = Router();

router.post('/battle', validateBody);

export default router;
