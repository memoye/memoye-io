import { Main } from "../../Layout"

export const Blog = () => {
    return (
        <Main
            initial={ { y: 20, opacity: 0 } }
            animate={ { y: 0, opacity: 0.7 } }
            transition={ { duration: 1, ease: 'easeOut' } }
        >
            Blog
        </Main>
    )
}