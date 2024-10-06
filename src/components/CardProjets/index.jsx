
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos"
import "aos/dist/aos.css"
function CardProjets({ nome, img, descricao, id, endereco }) {
    
    useEffect(() => {
        AOS.init({durantion:2000})
    })  
    return ( 
    <>
    <div data-aos="fade-up" className="flex flex-col md:flex-row justify-center items-center md:gap-20 mb-10 transition-all duration-400 ease-in-out">
    <img className="border rounded-3xl p-3 mb-5 w-3/6 h-3/6 md:w-4/12 md:h-4/12 lg:w-2/12 lg:h-2/12" src={img} alt="" />
    <div className="text-center md:text-left">
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="text-lg mt-5 mb-5">{descricao}</p>
        <NavLink className="text-2xl hover:font-bold border-b-2 border-transparent hover:border-white transition-all duration-400 ease-in-out hover:tracking-widest" to={"/" && endereco}>Saiba mais</NavLink>
    </div>
    </div>

    
    </> );
}

export default CardProjets;