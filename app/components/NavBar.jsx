import { Link } from '@remix-run/react'
import React from 'react'

export default function NavBar() {
    return (
        <div className='w-full fixed top-0 bg-indigo-700 py-3 px-12 text-white shadow-2xl'>

            <div className='flex justify-between items-center'>

                <h1>APP</h1>

                <div className='flex space-x-4 '>
                    <Link to={'deportistas'} className='hover:text-indigo-950'>
                        <button className=''>
                            Deportistas
                        </button>
                    </Link>
                    <Link to={'registros'} className='hover:text-indigo-950'>
                        <button className=''>
                            Registros
                        </button>
                    </Link>
                </div>

            </div>


        </div>
    )
}
