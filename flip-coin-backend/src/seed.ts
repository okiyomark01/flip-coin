// src/seed.ts (One-time script to add a player)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const player = await prisma.player.create({
        data: {
            balance: 100.0, // Set initial balance for testing
        },
    });
    console.log('Player created:', player);
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
