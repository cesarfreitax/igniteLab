import React from 'react'
import Icon from './Icon'

function Footer() {
    return (
        <div className='bg-black h-40 w-full flex flex-col justify-around items-center pt-3 pb-3 lg:flex-row lg:justify-between px-8 lg:h-20'>
            <div className='flex flex-col items-center gap-4 lg:flex-row'>
                <div>
                    <Icon />
                </div>

                <p className='text-sm text-gray-300'>
                    Rocketseat - Todos os direitos reservados
                </p>
            </div>

            <p className='text-sm text-gray-300'>
                Políticas de privacidade
            </p>
        </div>
    )
}

export default Footer