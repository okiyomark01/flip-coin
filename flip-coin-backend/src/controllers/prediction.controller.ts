import { Request, Response } from 'express';
import * as predictionService from '../services/prediction.service';

// Existing makePrediction function
export const makePrediction = async (req: Request, res: Response) => {
    try {
        const { userGuess } = req.body;
        const playerId = 1; // Static player ID for now; would be dynamic in a multi-user setup.
        const { outcome, newBalance } = await predictionService.makePrediction(userGuess, playerId);

        res.status(200).json({ outcome, balance: newBalance });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unexpected error occurred' });
        }
    }
};

// New getResults function
export const getResults = async (req: Request, res: Response) => {
    try {
        // Fetch results from the prediction service
        const results = await predictionService.getResults();
        res.status(200).json(results);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unexpected error occurred' });
        }
    }
};

