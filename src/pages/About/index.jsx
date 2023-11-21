import { motion } from "framer-motion"

export const About = () => {
    return (
        <motion.div
            initial={ { y: 20, opacity: 0 } }
            animate={ { y: 0, opacity: 1 } }
            transition={ { duration: 1, ease: 'easeOut' } }
        >
            About
        </motion.div>
    )
}