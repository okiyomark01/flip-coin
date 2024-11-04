import { Router } from 'express';
import * as predictionController from '../controllers/prediction.controller';

const router = Router();

// Define routes
router.post('/predict', predictionController.makePrediction);
router.get('/results', predictionController.getResults); // Ensure this is correct

export default router;
