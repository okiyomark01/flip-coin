// src/routes/player.routes.ts
import { Router } from 'express';
import * as playerController from '../controllers/player.controller';

const router = Router();

router.get('/balance', playerController.getBalance);

export default router;
