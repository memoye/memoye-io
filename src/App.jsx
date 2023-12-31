import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { NavBar, Footer } from './components'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={ `flex flex-col min-h-[100svh] relative overflow-hidden` }>
      <NavBar />

      <div className={ `absolute w-1/2 h-[40rem] top-0 left-8 bg-blurgradient2 bg-contain scale-125 bg-no-repeat bg-center opacity-30 z-0` } />
      <div className={ `absolute w-1/2 h-[30rem] top-[700px] right-10 bg-blurgradient3 bg-contain bg-no-repeat bg-center opacity-30 z-0` } />

      <AnimatePresence>
        <div className={ `flex-auto max-w-6xl mx-auto w-full px-6 pt-20 z-20 min-h-screen` }>
          <Outlet />
        </div>
      </AnimatePresence>

      <motion.div
        className={ `fixed w-full h-1 bg-base-content z-50 top-0 max-[400px]:opacity-40` }
        style={ { scaleX } }
      />
      {/* <motion.div
        className={ `fixed w-full h-1 bg-base-content z-50 top-0 max-[400px]:opacity-40` }
        style={ { scaleX } }
      /> */}

      <Footer />
    </div>
  )
}

export default App
