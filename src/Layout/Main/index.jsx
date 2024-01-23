import { motion } from "framer-motion"

export const Main = ({ children }) => {
    return (
        <motion.main
            initial={ { y: 20, opacity: 0 } }
            animate={ { y: 0, opacity: 1 } }
            transition={ { duration: 1, ease: 'easeOut' } }
        >
            { children }
        </motion.main>
    )
}