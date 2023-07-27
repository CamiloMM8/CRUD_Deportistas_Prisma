
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();



export const getModalidades = async () => {
    try {
        const modalidades = await prisma.modalidad.findMany()

        if (modalidades) {
            return { ok: true,modalidades }
        }

    } catch (error) {
        return { ok: false }
    }
}

