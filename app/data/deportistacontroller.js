
import { PrismaClient } from '@prisma/client'
import deportistas from '../routes/deportistas';

const prisma = new PrismaClient();



export const createDeportista = async (form) => {
    try {
        const created = await prisma.deportista.create({
            data: {
                nombre: form.nombre,
                correo: form.correo,
                edad: parseInt(form.edad),
                pais: form.pais
            }
        })

        if (created.id) {
            return { ok: true }
        }

    } catch (error) {
        return { ok: false, msg: "Error al crear el deportista" }
    }
}


export const editDeportista = async (form) => {
    try {

        const edit = await prisma.deportista.update({
            data: {
                nombre: form.nombre,
                correo: form.correo,
                edad: parseInt(form.edad),
                pais: form.pais
            },
            where: {
                id: parseInt(form.id)
            }
        })

        if (edit.id) {
            return { ok: true }
        }
        return { ok: false }
    } catch (error) {
        return { ok: false }
    }
}

export const deleteDeportista = async (id) => {
    try {

        const deleted = await prisma.deportista.delete({
            where: {
                id: parseInt(id)
            }
        })

        if (deleted.id) {
            return { ok: true }
        }

    } catch (error) {
        return { ok: false }
    }
}


export const getDeportistas = async () => {
    try {

        const deportistas = await prisma.deportista.findMany();

        if (deportistas) {
            return {
                ok: true,
                deportistas: deportistas
            }
        }

    } catch (error) {
        return { ok: false }
    }
}


export const getDeportista = async (id) => {
    try {
        const deportista = await prisma.deportista.findFirst({
            where: {
                id: parseInt(id)
            }
        });

        if (deportista) {
            return {
                ok: true,
                deportista: deportista
            }
        }

        return { ok: false }
    } catch (error) {
        return { ok: false }
    }
}