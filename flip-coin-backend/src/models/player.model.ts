// src/models/player.model.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Fetches the balance of a player by ID.
 * @param id - The player's ID
 * @returns The player's balance or 0 if the player is not found
 */
export const getPlayerBalance = async (id: number): Promise<number> => {
    const player = await prisma.player.findUnique({
        where: { id },
        select: { balance: true },
    });
    return player?.balance || 0; // Return balance if found, otherwise 0
};

/**
 * Fetches player details by ID.
 * @param id - The player's ID
 * @returns The player object if found, otherwise null
 */
export const getPlayer = async (id: number) => {
    return await prisma.player.findUnique({
        where: { id },
    });
};

/**
 * Updates the player's balance.
 * @param id - The player's ID
 * @param newBalance - The new balance to set for the player
 * @returns The updated player object
 */
export const updateBalance = async (id: number, newBalance: number) => {
    return await prisma.player.update({
        where: { id },
        data: { balance: newBalance },
    });
};
