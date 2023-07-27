

import React from 'react'
import ContentSection from '../components/ContentSection'
import { Form, Link, useActionData, useLoaderData } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { createDeportista, getDeportistas } from '../data/deportistacontroller'
import { getModalidades } from '../data/modalidadcontroller'
import FormRegistro from '../components/Registros/FormRegistro'
import { createRegister } from '../data/registrocontroller'


export const loader = async () => {
    const deportistas = await getDeportistas();
    const modalidades = await getModalidades();
    console.log(deportistas, 'deportistas');
    console.log(modalidades, 'modalidades');

    return { deportistas: deportistas.deportistas, modalidades: modalidades.modalidades }
};

export const action = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    console.log(formData);
    const create = await createRegister(formData);
    if (create?.ok) {
        return redirect('/registros');
    }
    return create.msg;

};

export default function create() {
    const { deportistas, modalidades } = useLoaderData();
    const resp = useActionData();
    return (
        <>

            <ContentSection>

                <div className='flex flex-col justify-center items-center'>
                    <div className=''>
                        <Link to={'..'}>
                            {/* <button className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl shadow-2xl'>
                               
                            </button> */}
                        </Link>
                        <h1 className='uppercase text-black font-semibold'>
                            Crear Registro
                        </h1>
                    </div>


                    <div className='mt-5 flex-1 lg:flex lg:flex-col '>

                        <span className='text-red'>{resp ? resp : ''}</span>

                        <FormRegistro modalidades={modalidades} deportistas={deportistas} />


                    </div>

                </div>
            </ContentSection>

        </>
    )
}
