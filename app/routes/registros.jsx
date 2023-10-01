import React from 'react'
import ContentSection from '../components/ContentSection'
import { getDeportistas } from '../data/deportistacontroller';
import { Link, useLoaderData } from '@remix-run/react';
import { getRegistros } from '../data/registrocontroller';


export const loader = async () => {

    const registros = await getRegistros();
    console.log(registros,'REGISTROS $$##')


    
    return {registros:registros.registros};
};

export default function deportistas() {
    const {registros} = useLoaderData();
    return (

        <>
            <ContentSection>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='uppercase text-black font-semibold'>
                        Registros de Deportistas
                    </h1>

                    <div className='py-6'>
                        <Link to={'create'}>
                            <button className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl shadow-2xl'>
                                Nuevo Registro
                            </button>
                        </Link>
                    </div>

                    <table className='table-auto'>
                        <thead className=''>
                            <tr className='bg-gray-200 text-gray-600 uppercase text-sm lg:text-base leading-normal'>
                                <th className='py-3 px-6 text-center'>Pais</th>
                                <th className='py-3 px-6 text-center'>Nombre</th>
                                <th className='py-3 px-6 text-center'>Arranque(KG)</th>
                                <th className='py-3 px-6 text-center'>Envion(KG)</th>
                                <th className='py-3 px-6 text-center'>Total Peso</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-600 text-sm font-light'>
                            {/* registros */}
                            {registros?.map(registro => {
                                return (
                                    <tr key={registro.id} className='border-b border-gray-200 hover:bg-gray-100'>
                                        <td className='py-3 px-6 text-center'>{registro.pais}</td>
                                        <td className='py-3 px-6 text-center'>{registro.nombre}</td>
                                        <td className='py-3 px-6 text-center'>{registro.arranque}</td>
                                        <td className='py-3 px-6 text-center'>{registro.envion}</td>
                                        <td className='py-3 px-6 text-center'>{registro?.arranque + registro?.envion}</td>
                                       
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
