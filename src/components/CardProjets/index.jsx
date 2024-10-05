
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
    <div data-aos="fade-up" className=" justify-center flex md:gap-40 items-center mb-10 transition-all duration-400 ease-in-out">
            <img className="w-1/6 border rounded-3xl p-3" src={img} alt="" />
            <div className="w-3/6">
                <h2 className="text-4xl m-5 font-bold">{nome}</h2>
                <p className="text-lg">{descricao}</p>
                <NavLink className=" text-2xl hover:font-bold border-b-2 border-transparent hover:border-white transition-all duration-400 ease-in-out hover:tracking-widest" to={"/"&&endereco}>Saiba mais</NavLink>
            </div>
            
    </div>
    
    </> );
}

export default CardProjets;