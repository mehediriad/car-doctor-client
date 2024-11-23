import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <div className="bg-[#151515]">
            <footer className="footer  text-base-content p-10 max-w-7xl mx-auto">
                <aside className="space-y-4">
                    <img src={logo} alt="logo" />
                    <p>
                         Edwin Diaz is a software and web <br />
                         technologies engineer, a life coach <br />
                         trainer who is also a serial .
                    </p>
                    <div className="flex gap-6 text-lg">
                        <Link to={`#`}><FaGoogle/></Link>
                        <Link to={`#`}><FaTwitter/></Link>
                        <Link to={`#`}><FaInstagram/></Link>
                        <Link to={`#`}><FaFacebook/></Link>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Service</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;