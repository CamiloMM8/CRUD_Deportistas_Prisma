import React from 'react'
import { deleteDeportista } from '../data/deportistacontroller';
import { redirect } from '@remix-run/node';

export const loader = async ({ params }) => {
    const id = params.id;
    console.log(id);
    const deleted = await deleteDeportista(id);

    if (deleted.ok) {
        return redirect('/deportistas')
    }
    return redirect('/deportistas')
};
