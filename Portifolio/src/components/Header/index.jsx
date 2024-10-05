import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const hover = "m-4 hover:font-bold border-b-2 border-transparent hover:border-white transition-all duration-400 ease-in-out hover:tracking-widest"
    const [isClick, setClick] = useState(false)
    const [menu, setMenu] = useState("Menu")
    const handleMenu = () => {
        setClick(!isClick)
        menu == "Menu"? "" : "Menu"
    }
    return ( 
        <>
            <div className="flex ml-2 text-lg ">
                
                <button onClick={handleMenu} className="m-5 z-0 hover:tracking-widest hover:text-xl hover:font-bold">{menu}</button>
                    
               
                {isClick && <ul className=" gap-10 m-5 z-10 absolute">
                    <li><button onClick={handleMenu} className="hover:font-bold">Menu</button></li>
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