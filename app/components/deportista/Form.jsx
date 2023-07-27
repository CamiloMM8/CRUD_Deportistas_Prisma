import React from 'react'
import ButtonPrimary from '../ButtonPrimary'
import { Form } from '@remix-run/react'
export default function FormDeportista({ deportista }) {

    const defaultValue = {
        id: deportista ? deportista.id : "",
        nombre: deportista ? deportista.nombre : "",
        correo: deportista ? deportista.correo : "",
        edad: deportista ? deportista.edad : "",
        pais: deportista ? deportista.pais : ""
    }
    return (
        <Form method='post'>
            <input type='hidden' name='id' defaultValue={defaultValue.id} className='hidden'/>
            <div className='flex space-x-5'>

                <div>
                    <label className='block text-gray-700 font-bold mb-1'>Nombre</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight' type='text' name='nombre' placeholder='Nombre' required defaultValue={defaultValue.nombre} />
                </div>

                <div>
                    <label className='block text-gray-700 font-bold mb-1'>Correo</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight' type='email' name='correo' placeholder='Correo' required defaultValue={defaultValue.correo} />
                </div>

            </div>
            <div className='flex space-x-5'>
                <div>
                    <label className='block text-gray-700 font-bold mb-1'>Edad</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight' type='number' name='edad' placeholder='Edad' required defaultValue={defaultValue.edad} />
                </div>

                <div>
                    <label className='block text-gray-700 font-bold mb-1'>País</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight' type='text' name='pais' placeholder='País' required defaultValue={defaultValue.pais} />
                </div>

            </div>
            <div className='mt-6'>

                <ButtonPrimary text='Guardar' />

            </div>


        </Form>
    )
}
