
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

        const deportistas = await prisma.deportista.findMany({
            include: {
                registromodalidad: {
                    include: {
                        modalidad: {
                            select: {
                                nombre: true
                            },

                        },
                    },
                }
            }
        })
        console.log(deportistas)

        const arrayDeportistas = await Promise.all(deportistas.map(async (deportista) => {
            const envion = await prisma.registromodalidad.findFirst({
                where: {
                    modalidad: {
                        nombre: "ENVION"
                    },
                    id: deportista.id
                },
                orderBy: {
                    peso: 'desc'
                },
                take: 1,
                select: {
                    peso: true
                }
            })
            const arranque = await prisma.registromodalidad.findFirst({
                where: {
                    modalidad: {
                        nombre: "ARRANQUE"
                    },
                    id: deportista.id
                },
                orderBy: {
                    peso: 'desc'
                },
                take: 1,
                select: {
                    peso: true
                }
            })
            console.log(envion, 'envion max')
            return {
                ...deportista,
                envion: envion ? envion.peso : 0,
                arranque: arranque ? arranque.peso : 0,
                totalPeso: (envion ? envion.peso : 0) + (arranque ? arranque.peso : 0)
            }
        }));

        console.log(arrayDeportistas, 'arrayDeportistas')
        return { ok: true, registros: arrayDeportistas }
        return { ok: false }
    } catch (error) {
        return { ok: false }
    }
}
