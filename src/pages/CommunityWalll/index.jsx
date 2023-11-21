import { motion } from "framer-motion"

export const CommunityWall = () => {
    return (
        <motion.div
            initial={ { y: 20, opacity: 0 } }
            animate={ { y: 0, opacity: 1 } }
            transition={ { duration: 1, ease: 'easeOut' } }
        >
            Commuity wall
        </motion.div>
    )
}