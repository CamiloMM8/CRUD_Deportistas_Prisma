
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();



export const createRegister = async (form) => {
    try {
        const created = await prisma.registromodalidad.create({
            data: {
                modalidadId: parseInt(form.modalidadId),
                deportistaId: parseInt(form.deportistaId),
                peso: parseFloat(form.peso)
            }
        })

        if (created.id) {
            return { ok: true, msg: "Registro creado" }
        }
        return { ok: false, msg: "Error al crear el registro" }
    } catch (error) {
        console.log(error, 'error')
        return { ok: false, msg: "Error al crear el registro" }
    }
}



export const getRegistros = async () => {
    try {
        const deportistas = await prisma.$queryRaw`
    SELECT
      d.id,
      d.nombre,
      d.pais,
      COALESCE(MAX(CASE WHEN m.nombre = 'ARRANQUE' THEN rm.peso END), 0) AS arranque,
      COALESCE(MAX(CASE WHEN m.nombre = 'ENVION' THEN rm.peso END), 0) AS envion
    FROM Deportista d
    LEFT JOIN registromodalidad rm ON d.id = rm.deportistaId
    LEFT JOIN Modalidad m ON rm.modalidadId = m.id
    GROUP BY d.id, d.nombre, d.pais
  `;

        console.log(deportistas, 'deportistas SQL')
        return { ok: true, registros: deportistas };
    } catch (error) {
        console.log('false', error)
        return { ok: false, registros: [] }
    }
}
