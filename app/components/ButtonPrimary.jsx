import React from 'react'

export default function ButtonPrimary({ text = '' }) {
    return (
        <button type='submit' className='px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl shadow-2xl'>
            {text}
        </button>
    )
}
