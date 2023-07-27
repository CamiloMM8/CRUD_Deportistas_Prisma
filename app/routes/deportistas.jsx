import React from 'react'
import ContentSection from '../components/ContentSection'
import { getDeportistas } from '../data/deportistacontroller';
import { Link, useLoaderData } from '@remix-run/react';


export const loader = async () => {
    const deportistas = await getDeportistas();
    console.log(deportistas, 'deportistas')
    return { deportistasArray: deportistas.ok ? deportistas.deportistas : [] }
};

export default function deportistas() {
    const { deportistasArray } = useLoaderData();
    return (

        <>
            <ContentSection>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='uppercase text-black font-semibold'>
                        Lista de Deportistas
                    </h1>

                    <div className='py-6'>
                        <Link to={'create'}>
                            <button className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl shadow-2xl'>
                                Nuevo Deportista
                            </button>
                        </Link>
                    </div>

                    <table className='table-auto'>
                        <thead className=''>
                            <tr className='bg-gray-200 text-gray-600 uppercase text-sm lg:text-base leading-normal'>
                                <th className='py-3 px-6 text-center'>Nombre</th>
                                <th className='py-3 px-6 text-center'>Correo</th>
                                <th className='py-3 px-6 text-center'>Edad</th>
                                <th className='py-3 px-6 text-center'>Pais</th>
                                <th className='py-3 px-6 text-center'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-600 text-sm font-light'>
                            {/* deporstistas */}
                            {deportistasArray?.map(deportista => {
                                return (
                                    <tr key={deportista.id} className='border-b border-gray-200 hover:bg-gray-100'>
                                        <td className='py-3 px-6 text-center'>{deportista.nombre}</td>
                                        <td className='py-3 px-6 text-center'>{deportista.correo}</td>
                                        <td className='py-3 px-6 text-center'>{deportista.edad}</td>
                                        <td className='py-3 px-6 text-center'>{deportista.pais}</td>
                                        <th className='py-3 px-6 text-center'>
                                            <div className='flex space-x-4'>
                                                <Link to={`edit/${deportista.id}`}>
                                                    <button className='hover:text-blue-700'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                        </svg>
                                                    </button>
                                                </Link>
                                                <Link to={`delete/${deportista.id}`}>
                                                    <button className='hover:text-blue-700'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>

            </ContentSection>
        </>

    )
}
