import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <motion.div
            initial={ { y: 20, opacity: 0.7 } }
            animate={ { y: 0, opacity: 1 } }
            transition={ { duration: 1, ease: 'easeOut' } }
        >
            Home
        </motion.div>
    )
}