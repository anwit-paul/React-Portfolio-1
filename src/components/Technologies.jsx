import { RiReactjsFill } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
        }
    }
})

const Technologies = () => {
    return (
        <div>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 2 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsFill className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.2)}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.4)}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiBootstrap className="text-7xl text-purple-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.6)}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.4)}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.2)}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies