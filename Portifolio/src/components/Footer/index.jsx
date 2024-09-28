import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    const hover = "hover:text-gray-500"
    const icon = "flex items-center gap-2"
    return ( 
        <>
        <div className="bg-black text-white  p-5 ">
            <ul>
                <li className={icon}><MdEmail />Email: davidcordeiro1507@gmail.com</li>
                <li className={icon}> <FaLinkedin />LinkedIn: <a className={hover} href="https://www.linkedin.com/in/david-cordeiro-b89402301/">David Cordeiro</a></li>
                <li className={icon}> <FaGithub />Github: <a className={hover} href="https://github.com/davidcordeiro15">David_Cordeiro</a></li>
            </ul>
        </div>
        </>
     );
}

export default Footer;