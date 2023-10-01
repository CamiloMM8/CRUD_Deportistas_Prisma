

import React from 'react'
import ContentSection from '../components/ContentSection'
import { Form, Link, useActionData } from '@remix-run/react'
import ButtonPrimary from '../components/ButtonPrimary'
import FormDeportista from '../components/deportista/Form'
import { redirect } from '@remix-run/node'
import { createDeportista } from '../data/deportistacontroller'


export const loader = async () => {

    return {}
};

export const action = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    console.log(formData);
    const create = await createDeportista(formData);
    if (create?.ok) {
        return redirect('/deportistas');
    }
    return create.msg;

};

export default function create() {
    const resp = useActionData();
    return (
        <>

            <ContentSection>

                <div className='flex flex-col justify-center items-center'>
                    <Link to={'/deportistas'} className='justify-self-start self-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </Link>
                    <div className=''>
                        <h1 className='uppercase text-black font-semibold'>
                            Crear Deporstista
                        </h1>
                    </div>


                    <div className='mt-5 flex-1 lg:flex lg:flex-col '>

                        <span className='text-red'>{resp ? resp : ''}</span>

                        <FormDeportista />


                    </div>

                </div>
            </ContentSection>

        </>
    )
}
