<<<<<<< HEAD
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
=======
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-header py-8">
      <div className="ml-32">
        <Logo />
      </div>
>>>>>>> 58c5defb1eabb4aaf3d40067a8acde12e3163048

      <span className="text-gray-800 border-transparent border-b-2 hover:border-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium uppercase">
        Home
      </span>
    </div>
  );
};

export default Header;
