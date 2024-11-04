import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to create a new prediction
export const createPrediction = async (userGuess: string, outcome: string, playerId: number) => {
    return await prisma.prediction.create({
        data: {
            userGuess,
            outcome,
            playerId,
        },
    });
};

// Function to get the latest predictions
export const getLatestPredictions = async () => {
    return await prisma.prediction.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10, // Retrieve the latest 10 predictions
    });
};
