
import { NavLink } from "react-router-dom";
function CardProjets({ nome, img, descricao, endereco }) {
 
    return ( 
    <>
    <div className="w-3/6">
            <img src={img} alt="" />
            <h2 className="text-2xl m-5">{nome}</h2>
            <p>{descricao}</p>
            <NavLink className="hover:text-gray-600 hover:underline m-20" to={"/"&&endereco}>Saiba mais</NavLink>
    </div>
    
    </> );
}

export default CardProjets;