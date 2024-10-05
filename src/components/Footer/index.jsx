import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
    const hover = "hover:font-bold border-b-2 border-transparent hover:border-white transition-all duration-400 ease-in-out hover:tracking-widest   "
    const icon = "flex items-center gap-2"
    return ( 
        <>
        <div className="p-5 text-xl">
            <ul>
                <li className={icon}><MdEmail />Email: <NavLink className={hover} to={"/contato"}> davidcordeiro1507@gmail.com</NavLink></li>
                <li className={icon}> <FaLinkedin />LinkedIn: <a className={hover} href="https://www.linkedin.com/in/david-cordeiro-b89402301/">David Cordeiro</a></li>
                <li className={icon}> <FaGithub />Github: <a className={hover} href="https://github.com/davidcordeiro15">David_Cordeiro</a></li>
            </ul>
        </div>
        </>
     );
}

export default Footer;