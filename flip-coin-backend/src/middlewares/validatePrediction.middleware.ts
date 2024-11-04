import { Request, Response, NextFunction } from 'express';

export const validatePrediction = (req: Request, res: Response, next: NextFunction): void => {
    const { userGuess } = req.body;

    if (userGuess !== 'heads' && userGuess !== 'tails') {
        res.status(400).json({ error: 'Invalid prediction, must be "heads" or "tails"' });
    } else {
        next();
    }
};
