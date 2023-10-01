

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
                <Link to={'/registros'} className='justify-self-start self-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                        </Link>
                    <div >
                      
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
