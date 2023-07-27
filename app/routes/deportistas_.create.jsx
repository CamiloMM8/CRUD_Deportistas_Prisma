

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
                    <div className=''>
                        <Link to={'..'}>
                            {/* <button className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl shadow-2xl'>
                               
                            </button> */}
                        </Link>
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
