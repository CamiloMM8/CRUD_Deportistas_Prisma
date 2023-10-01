import React from 'react'
import ButtonPrimary from '../ButtonPrimary'
import { Form } from '@remix-run/react'
export default function FormRegistro({ deportistas, modalidades }) {

    // const defaultValue = {
    //     id: deportista ? deportista.id : "",
    //     nombre: deportista ? deportista.nombre : "",
    //     correo: deportista ? deportista.correo : "",
    //     edad: deportista ? deportista.edad : "",
    //     pais: deportista ? deportista.pais : ""
    // }
    return (
        <Form method='post'>
            <input type='hidden' name='id' className='hidden' />
            <div className='flex flex-wrap space-x-5'>

                <div>
                    <label className='block text-gray-700 font-bold mb-1'>Deportista</label>
                    <select name='deportistaId' className='block appearance-none bg-white border border-gra-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline focus:border-blue-500 focus:ring-blue-200'>
                        {deportistas.map(deportista => {
                            return (
                                <option key={deportista.id} value={deportista.id}>{deportista.nombre}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <label className='block text-gray-700 font-bold mb-1'>Modalidad</label>
                    <select name='modalidadId' className='block appearance-none bg-white border border-gra-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline focus:border-blue-500 focus:ring-blue-200'>
                        {modalidades.map(modalidad => {
                            return (
                                <option key={modalidad.id} value={modalidad.id}>{modalidad.nombre}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label className='block text-gray-700 font-bold mb-1'>Peso</label>
                    <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight' type='number' name='peso' placeholder='Peso' required />
                </div>

            </div>

            <div className='mt-6'>

                <ButtonPrimary text='Guardar' />

            </div>


        </Form>
    )
}
