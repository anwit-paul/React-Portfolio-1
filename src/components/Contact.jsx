import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants'

const Contact = () => {
    return (
        <div>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>Get in touch</motion.h2>
            <div className='text-center tracking-tighter pb-20 mb-20'>
                <p className='my-0'>{CONTACT.addressLine1}</p>
                <p className='my-0'>{CONTACT.addressLine2}</p>
                <p className='my-0'>{CONTACT.addressLine3}</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <a href='#' className='border-b'>{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact