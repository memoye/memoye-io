import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className={ `z-20 backdrop-grayscale grayscale bg-base-100 bg-opacity-10` }>
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
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    )
}