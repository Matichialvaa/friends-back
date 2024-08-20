import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.friend.create({
        data: {
            name: 'Mati',
            email: 'mch@gmail.com',
            phone: '123456789',
            addresses: {
                create: [
                    {
                        street: 'Bancalari',
                        city: 'Tigre',
                        state: 'Buenos aires',
                        code: '1608',
                    },
                ],
        },
    },
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
