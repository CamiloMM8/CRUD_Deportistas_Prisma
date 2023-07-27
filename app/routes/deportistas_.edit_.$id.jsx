import { redirect } from '@remix-run/node';
import { Form, Link, useActionData, useLoaderData } from '@remix-run/react'
import React from 'react'
import FormDeportista from '../components/deportista/Form';
import { editDeportista, getDeportista } from '../data/deportistacontroller';
import ContentSection from '../components/ContentSection';

export const loader = async ({ params }) => {
    const id = params.id
    const deportista = await getDeportista(id);
    console.log(deportista, 'deportista edit')
    if (!deportista.ok) {
        return redirect('/deportistas')
    }
    return { deportista }
};

export const action = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const edit = await editDeportista(formData);
    if (edit.ok) {
        return redirect(`/deportistas`);
    }

    return edit.msg
};

export default function editDeportistaComponent() {
    const { deportista } = useLoaderData();
    const resp = useActionData();
    return (
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

                    <FormDeportista deportista={deportista.deportista} />


                </div>

            </div>
        </ContentSection>
    )
}
