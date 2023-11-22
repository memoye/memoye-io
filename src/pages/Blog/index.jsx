import { motion } from "framer-motion"

export const Blog = () => {
    return (
        <motion.div
            initial={ { y: 20, opacity: 0 } }
            animate={ { y: 0, opacity: 0.7 } }
            transition={ { duration: 1, ease: 'easeOut' } }
        >
            Blog
        </motion.div>
    )
}