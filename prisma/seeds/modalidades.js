// seeds/defaultData.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  await prisma.Modalidad.create({
    data: {
      nombre: 'ARRANQUE',
    },
  });

  await prisma.Modalidad.create({
    data: {
      nombre: 'ENVION',
     
    },
  });

  // Agregar más registros según sea necesario

  console.log('Seeds ejecutados con éxito');
}

seed()
  .catch((error) => {
    console.error('Error al ejecutar seeds:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });