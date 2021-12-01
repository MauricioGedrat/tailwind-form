import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='bg-header py-8 flex justify-between items-center'>
            <div className='ml-32'>
                <Logo />
            </div>
            <nav className='mr-32 font-poppins'>
                <div className='flex gap-8'>
                    <div className='border-transparent border-b-2 hover:border-yellow-500 duration-300 ' ><Link href='Contact'>Contato</Link></div>
                    <div className='border-transparent border-b-2 hover:border-yellow-500 duration-300 '><Link href='Houses'>Casas</Link></div>
                    <div className='border-transparent border-b-2 hover:border-yellow-500 duration-300 '><Link href='Security'>Seguros</Link></div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Header
