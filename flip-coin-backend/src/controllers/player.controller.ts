// src/controllers/player.controller.ts
import { Request, Response } from 'express';
import * as playerModel from '../models/player.model';

export const getBalance = async (req: Request, res: Response) => {
    try {
        const playerId = 1; // Static player ID; replace with dynamic ID for multi-user support.
        const balance = await playerModel.getPlayerBalance(playerId);
        res.status(200).json({ balance });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch balance' });
    }
};
