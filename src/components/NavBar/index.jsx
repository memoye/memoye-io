import { TbSun, TbMoon } from 'react-icons/tb'
import { Link, NavLink } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export const NavBar = () => {
    const [rotation, setRotation] = useState(0)
    const [isdark, setIsdark] = useState(
        JSON.parse(localStorage.getItem('isdark'))
    )
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setRotation(latest)
    })

    useEffect(() => {
        localStorage.setItem('isdark', JSON.stringify(isdark))
    }, [isdark])

    return (
        <div className={ `fixed w-full bg-opacity-75 bg-base-100 backdrop-blur-sm z-30` }>
            <div className="navbar  max-w-6xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        {/* mobile nav */ }
                        <ul tabIndex={ 0 } className={ `menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52` }>
                            <li><NavLink to={ `/` } className={ NavLinkClassNames } >Home</NavLink></li>
                            <li><NavLink to={ `/about` } className={ NavLinkClassNames } >About</NavLink></li>
                            <li><NavLink to={ `/projects` } className={ NavLinkClassNames } >Projects</NavLink></li>
                            <li>
                                <NavLink to={ `/blog` } className={ NavLinkClassNames + ' font-bold' }>
                                    Blog
                                    <div className="badge text-[8px] badge-sm badge-warning gap-2">
                                        Soon!
                                    </div>
                                </NavLink>
                            </li>
                            {
                                // for nested links
                                // <li>
                                //     <a>Parent</a>
                                //     <ul className="p-2">
                                //         <li><NavLink className={ NavLinkClassNames } >Submenu 1</NavLink></li>
                                //         <li><NavLink className={ NavLinkClassNames } >Submenu 2</NavLink></li>
                                //     </ul>
                                // </li> 
                            }
                            {/* <li><NavLink className={ NavLinkClassNames } >Item 3</NavLink></li> */ }
                        </ul>
                    </div>

                    {/* logo */ }
                    <Link to={ `/` } className="btn btn-ghost hover:bg-transparent p-0 text-xl hover:brightness-90 group">
                        <motion.figure
                            className={ `max-w-[3rem] group-active:animate-spin` }
                            style={ { rotate: rotation, transitionDuration: 5 } }
                        >
                            <img src={ `/logo.svg` } alt="Memoye" />
                        </motion.figure>
                        <span className={ `font-mono uppercase` }>Memoye</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">

                    {/* desktop nav */ }
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={ `/` } className={ NavLinkClassNames } >Home</NavLink></li>
                        <li><NavLink to={ `/about` } className={ NavLinkClassNames } >About</NavLink></li>
                        <li><NavLink to={ `/projects` } className={ NavLinkClassNames } >Projects</NavLink></li>
                        <li className={ `relative group` }>
                            <NavLink to={ `/blog` } className={ NavLinkClassNames + ' font-bold border border-base-content border-opacity-10' } >
                                Blog
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-3/4 text-[8px] top-1 w-max badge badge-xs badge-warning gap-2">
                                    Soon!
                                </div>
                            </NavLink>
                        </li>

                        {
                            // drop down
                            // <li tabIndex={ 0 }>
                            //     <details>
                            //         <summary className={ `hover:bg-transparent hover:text-info` }>Parent</summary>
                            //         <ul className="p-2">
                            //             <li><NavLink to={ `/` } className={ `hover:bg-transparent hover:text-info` } >Home</NavLink></li>
                            //             <li><NavLink className={ `hover:bg-transparent hover:text-info` } >Submenu 2</NavLink></li>
                            //         </ul>
                            //     </details>
                            // </li>
                        }

                        {/* <li><NavLink className={ NavLinkClassNames } >Item 3</NavLink></li> */ }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate ">
                        {/* this hidden checkbox controls the state */ }
                        <input type="checkbox" className="theme-controller" checked={ isdark } onChange={ () => setIsdark(!isdark) } value={ "black" } />

                        {/* sun icon */ }
                        <TbSun className={ `swap-on text-[2rem]` } />

                        {/* moon icon */ }
                        <TbMoon className={ `swap-off text-[2rem]` } />
                    </label>
                </div>
            </div>
        </div>
    )
}

function NavLinkClassNames({ isActive }) {
    return (`hover:bg-transparent hover:text-accent ${isActive && 'text-info'}`)
}
