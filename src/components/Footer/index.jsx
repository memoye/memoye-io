import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter, TbBrandWhatsapp, TbBrandX } from "react-icons/tb"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className={ `z-20 backdrop-grayscale backdrop-blur-md bg-base-100 bg-opacity-10` }>
            <footer className="footer p-10 text-base-content max-w-6xl  mx-auto">
                <nav>
                    <header className="footer-title">General</header>
                    <Link to={ `/` } className="link link-hover">Home</Link>
                    <Link to={ `/about` } className="link link-hover">About</Link>
                    <Link to={ `/projects` } className="link link-hover">Projects</Link>
                    <Link to={ `/blog` } className="link link-hover">Blog</Link>
                </nav>

                <nav>
                    <header className="footer-title">Specifics</header>
                    <Link to={ `/stats` } className="link link-hover">Stats</Link>
                    <Link to={ `/community` } className="link link-hover">Community wall</Link>
                    <Link to={ `/resume` } className="link link-hover">Resume</Link>
                    {/* <Link className="link link-hover">Press kit</Link> */ }
                </nav>

                <nav>
                    <header className="footer-title">Extra</header>
                    <Link to={ `#` } className={ `italic font-semibold opacity-40` }>Coming soon.</Link>
                    {/* <Link className="link link-hover">Community wall</Link>
                    <Link className="link link-hover">Resume</Link> */}
                    {/* <Link className="link link-hover">Press kit</Link> */ }
                </nav>

                {/* 
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav> */}
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-accent text-accent hover:text-neutral-content join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
                <nav>
                    <header className="footer-title">Social</header>
                    <ul className="grid grid-flow-col gap-4">
                        <li className="lg:tooltip lg:tooltip-bottom" data-tip="@memoye">
                            <a href="#" target="_blank">
                                <TbBrandGithub size={ 24 } />
                            </a>
                        </li>
                        <li className="lg:tooltip lg:tooltip-bottom" data-tip="@memoye_io">
                            <a href="https://twitter.com/memoye_io" target="_blank">
                                <TbBrandX size={ 24 } />
                            </a>
                        </li>
                        <li className="lg:tooltip lg:tooltip-bottom" data-tip="Brown Memoye">
                            <a href="https://www.linkedin.com/in/b-me" target="_blank">
                                <TbBrandLinkedin size={ 24 } />
                            </a>
                        </li>
                        <li className="lg:tooltip lg:tooltip-bottom" data-tip="Send me a message on WhatsApp.">
                            <a href="https://wa.link/42qswy" target="_blank">
                                <TbBrandWhatsapp size={ 24 } />
                            </a>
                        </li>
                        {/* <li className="lg:tooltip lg:tooltip-bottom" data-tip="">
                            <a href="tel:+2349076181828" target="_blank">
                                <TbBrandWhatsapp size={ 24 } />
                            </a>
                        </li> */}
                        {/* <a href="#" target="_blank"> <TbBrandInstagram size={ 24 } /> </a> */ }
                    </ul>
                </nav>
            </footer>
        </div>
    )
}