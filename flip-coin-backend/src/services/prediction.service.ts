import * as predictionModel from '../models/prediction.model';
import * as playerModel from '../models/player.model';

const PLAY_COST = 1.0;

// Function to make a prediction and update player balance
export const makePrediction = async (userGuess: 'heads' | 'tails', playerId: number) => {
    const player = await playerModel.getPlayer(playerId);

    if (!player || player.balance < PLAY_COST) {
        throw new Error('Insufficient balance');
    }

    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
    const newBalance = player.balance - PLAY_COST;

    // Update player balance in the database
    await playerModel.updateBalance(playerId, newBalance);
    await predictionModel.createPrediction(userGuess, outcome, playerId);

    return { outcome, newBalance };
};

// New function to get recent prediction results
export const getResults = async () => {
    return await predictionModel.getLatestPredictions(); // Calls the model function to fetch results
};
