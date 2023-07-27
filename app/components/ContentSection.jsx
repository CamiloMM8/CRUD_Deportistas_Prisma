import React from 'react'

export default function ContentSection({ children }) {
    return (
        <div className='section'>

            <div className='rounded-3xl border bg-white flex justify-center items-center py-4'>
                {children}
            </div>

        </div>
    )
}
