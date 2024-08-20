import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const logoSOFI = "./assets/Erick WEB/logosofi.png";

    return (
        <header className='absolute top-0 flex justify-between items-center p-5 h-24 bg-opacity-15 bg-[#D9D9D9] w-full'>
            <a href="/" className='flex-shrink-0'>
                <img className='h-20 w-auto' src={logoSOFI} alt="LOGOTIPO" />
            </a>
            <button
                className='block lg:hidden p-2 text-black focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                </svg>
            </button>
            <nav
                className={`lg:flex lg:items-center lg:space-x-4 text-black text-xl font-serif absolute lg:static lg:bg-transparent bg-[#D9D9D9] lg:w-auto w-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href="/Servicios">SERVICIOS</a>
                <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href="/Portafolio">PORTAFOLIO</a>
                <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href="/Galeria">GALERIA</a>
                <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href="/Mobiliario">MOBILIARIO</a>
                <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href="/Contacto">CONTACTO</a>
                <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href="/Ubicacion">VISÍTANOS</a>
            </nav>
        </header>
    );
}

export default NavBar;



