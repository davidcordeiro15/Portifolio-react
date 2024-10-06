import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const hover = " hover:font-bold border-b-2 border-transparent hover:border-white transition-all duration-400 ease-in-out hover:tracking-widest"
    const [isClick, setClick] = useState(false)
    const [menu, setMenu] = useState("Menu")
    const handleMenu = () => {
        setClick(!isClick)
        menu == "Menu"? "" : "Menu"
    }
    return ( 
        <>
            <div className="flex ml-2 text-lg ">
                <button onClick={handleMenu} className="md:text-3xl md:ml-5 lg:text-3xl xl:text-2xl  lg:mt-12 m-2 mt-10 z-0 hover:tracking-widest hover:text-3xl hover:font-bold">{menu}</button>
                {isClick && <ul className="flex gap-3  md:ml-5 lg:text-3xl mt-2 z-10 absolute md:flex xl:text-2xl md:text-3xl md:gap-10">
                    <li><NavLink to="/"   className={hover} onClick={handleMenu}>Home</NavLink></li>
                    <li><NavLink to="/contato"   className={hover}onClick={handleMenu}>Contato</NavLink></li>
                    <li><NavLink to="/sobre-mim"   className={hover} onClick={handleMenu}>Sobre Mim</NavLink></li>
                    <li><NavLink to="/projetos"   className={hover} onClick={handleMenu}> Projetos</NavLink></li>
                </ul>}

                
            </div>
        </>
     );
}

export default Header;