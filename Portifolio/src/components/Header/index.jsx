import { NavLink } from "react-router-dom";

function Header() {
    const hover = "hover:text-gray-500"
    return ( 
        <>
            <div className="justify-between flex p-2 bg-yellow-500 text-white text-lg">
                <div>
                    <p>David Cordeiro</p>
                    <img src="./img/d.png" alt="" />
                </div>
                <ul className="flex gap-10 mr-3">
                    <li><NavLink to="/"   className={hover}>Home</NavLink></li>
                    <li><NavLink to="/contato"   className={hover}>Contato</NavLink></li>
                    <li><NavLink to="/sobre-mim"   className={hover}>Sobre Mim</NavLink></li>
                    <li><NavLink to="/projetos"   className={hover}> Projetos</NavLink></li>
                </ul>
            </div>
        </>
     );
}

export default Header;