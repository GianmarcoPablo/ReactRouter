import React from 'react'

const Cliente = ({cliente}) => {

    const {nombre,empresa,email,telefono,id} = cliente
    return (
        <>
            <tr className='border-b'>
                <td className='p-6 space-y-2 '>
                    <p className='text-2xl text-gray-800'>{nombre}</p>
                    <p>{empresa}</p>
                </td>
                <td className='p-6'>
                    <p className='text-gray-600'>Email: <span className='text-gray-800 uppercase font-bold'>{email}</span></p>
                    <p className='text-gray-600'>Telefono: <span className='text-gray-800 uppercase font-bold'>{telefono}</span></p>
                </td>
                

                <td className='p-6 flex justify-center gap-4'>
                    <button
                        type='button'
                        className='text-blue-600 hover:text-blue-700 font-bold uppercase text-xs'
                    >
                        Editar
                    </button>
                    <button
                        type='button'
                        className='text-red-600 hover:text-red-700 font-bold uppercase text-xs'
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
            
        </>

    )
}

export default Cliente