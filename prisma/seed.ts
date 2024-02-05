import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {const user1 = await prisma.user.create({
    data: {
      username: 'john_doe',
      password: 'password123',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '123-456-7890',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'jane_smith',
      password: 'password456',
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      phoneNumber: '987-654-3210',
    },
  });

  // Crear habitaciones de ejemplo
  const room1 = await prisma.room.create({
    data: {
      number: 101,
      type: 'Standard',
      capacity: 2,
      description: 'Cozy room with a view',
      price: 100.0,
    },
  });

  const room2 = await prisma.room.create({
    data: {
      number: 201,
      type: 'Suite',
      capacity: 4,
      description: 'Luxurious suite with amenities',
      price: 250.0,
    },
  });

  // Crear reservas de ejemplo
  const reservation1 = await prisma.reservation.create({
    data: {
      checkIn: new Date('2024-02-01'),
      checkOut: new Date('2024-02-05'),
      guests: 2,
      totalPrice: 300.0,
      status: 'Confirmed',
      userId: user1.id,
      roomId: room1.id,
    },
  });

  const reservation2 = await prisma.reservation.create({
    data: {
      checkIn: new Date('2024-03-01'),
      checkOut: new Date('2024-03-07'),
      guests: 4,
      totalPrice: 700.0,
      status: 'Pending',
      userId: user2.id,
      roomId: room2.id,
    },
  });

  console.log('Datos de prueba insertados con éxito.');
}
// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });