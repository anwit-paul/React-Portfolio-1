import React from 'react'
import logo from '../assets/AP-removebg-preview.png'
import { FaLinkedin } from 'react-icons/fa'

const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/anwit-paul-b9b6a41b4/', '_blank', 'width=800,height=800')
}

const Navbar = () => {
    return (
        <nav className='mb-2 flex intems-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center mx-6 w-20 h-20'>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex items-center text-3xl mx-8' onClick={openLinkedin}>
                <FaLinkedin />
            </div>
        </nav>
    )
}

export default Navbar