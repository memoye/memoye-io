import { motion } from "framer-motion"

export const Blog = () => {
    return (
        <motion.div
            initial={ { y: 20, opacity: 0 } }
            animate={ { y: 0, opacity: 1 } }

            transition={ { duration: 0.5, delay: 0.5, ease: 'easeOut' } }
        >
            Blog
        </motion.div>
    )
}