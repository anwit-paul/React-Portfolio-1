import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const Projects = () => {
    return (
        <>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
                        <div className='w-full max-w-xl lg:w-1/4'>
                            <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded-lg' />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold text-xl'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects